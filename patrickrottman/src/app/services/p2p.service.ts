import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ConnectionState, GameMessage, P2PMessage } from '../interfaces/p2p.interfaces';

@Injectable({
  providedIn: 'root'
})
export class P2pService {
  private peerConnection: RTCPeerConnection | null = null;
  private dataChannel: RTCDataChannel | null = null;
  private iceCandidates: RTCIceCandidate[] = [];

  connectionState$ = new BehaviorSubject<ConnectionState>('disconnected');
  connectionString$ = new BehaviorSubject<string>('');
  message$ = new Subject<GameMessage>();
  error$ = new Subject<string>();
  status$ = new Subject<string>();

  initializeConnection() {
    try {
      this.peerConnection = new RTCPeerConnection({
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          { urls: 'stun:stun1.l.google.com:19302' },
          { urls: 'stun:stun2.l.google.com:19302' },
          { urls: 'stun:stun3.l.google.com:19302' },
          { urls: 'stun:stun4.l.google.com:19302' }
        ],
        iceCandidatePoolSize: 10
      });

      this.status$.next('Initializing WebRTC connection...');

      this.peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          this.status$.next(`ICE candidate found: ${event.candidate.candidate.substr(0, 50)}...`);
          this.iceCandidates.push(event.candidate);
        } else {
          this.status$.next('ICE gathering complete, generating final connection string');
          const description = this.peerConnection?.localDescription;
          const fullDesc = {
            sdp: description,
            iceCandidates: this.iceCandidates
          };
          this.connectionString$.next(btoa(JSON.stringify(fullDesc)));
        }
      };

      this.peerConnection.oniceconnectionstatechange = () => {
        const state = this.peerConnection?.iceConnectionState;
        this.status$.next(`ICE connection state changed to: ${state}`);
        
        if (state === 'connected' || state === 'completed') {
          this.status$.next('ICE connection established successfully');
          this.connectionState$.next('connected');
        } else if (state === 'failed' || state === 'disconnected' || state === 'closed') {
          this.error$.next(`ICE connection ${state}. Try using a different network or browser.`);
          this.connectionState$.next('disconnected');
        }
      };

      this.peerConnection.onconnectionstatechange = () => {
        const state = this.peerConnection?.connectionState;
        this.status$.next(`Connection state changed to: ${state}`);
        
        if (state === 'connected') {
          this.connectionState$.next('connected');
        } else if (state === 'failed' || state === 'closed') {
          this.error$.next(`Connection ${state}. Please try again.`);
          this.connectionState$.next('disconnected');
        }
      };

      this.peerConnection.onsignalingstatechange = () => {
        this.status$.next(`Signaling state changed to: ${this.peerConnection?.signalingState}`);
      };

      this.peerConnection.ondatachannel = (event) => {
        this.status$.next('Data channel received from peer');
        this.dataChannel = event.channel;
        this.setupDataChannel();
      };

    } catch (error) {
      this.error$.next(`Failed to initialize WebRTC: ${error}`);
      this.connectionState$.next('disconnected');
    }
  }

  private setupDataChannel() {
    if (!this.dataChannel) return;

    this.status$.next('Setting up data channel...');

    this.dataChannel.onopen = () => {
      this.status$.next(`Data channel opened (state: ${this.dataChannel?.readyState})`);
      this.connectionState$.next('connected');
    };

    this.dataChannel.onclose = () => {
      this.status$.next(`Data channel closed (state: ${this.dataChannel?.readyState})`);
      this.connectionState$.next('disconnected');
    };

    this.dataChannel.onerror = (error) => {
      this.error$.next(`Data channel error: ${error}`);
      this.status$.next(`Data channel error state: ${this.dataChannel?.readyState}`);
    };

    this.dataChannel.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        this.status$.next(`Received message: ${JSON.stringify(data)}`);
        this.message$.next(data);
      } catch (error) {
        this.error$.next('Invalid message format');
      }
    };

    this.status$.next(`Data channel initial state: ${this.dataChannel.readyState}`);
  }

  async createConnection() {
    try {
      this.connectionState$.next('connecting');
      this.status$.next('Creating new game connection...');
      this.initializeConnection();
      
      this.dataChannel = this.peerConnection!.createDataChannel('p2p');
      this.setupDataChannel();
      
      this.status$.next('Creating connection offer...');
      const offer = await this.peerConnection?.createOffer();
      
      if (!offer) {
        throw new Error('Failed to create offer');
      }

      this.status$.next('Setting local description...');
      await this.peerConnection?.setLocalDescription(offer);
      
      const fullDesc = {
        sdp: offer,
        iceCandidates: this.iceCandidates
      };
      
      this.connectionString$.next(btoa(JSON.stringify(fullDesc)));
      this.status$.next('Your connection code has been copied - share it with peer and wait for their response');
    } catch (error) {
      this.error$.next(`Failed to create connection: ${error}`);
      this.connectionState$.next('disconnected');
      this.cleanup();
    }
  }

  async joinConnection(connectionString: string) {
    try {
      if (!connectionString.trim()) {
        throw new Error('Connection code is empty');
      }

      this.connectionState$.next('connecting');
      this.status$.next('Joining existing game...');
      this.initializeConnection();
      
      const { sdp, iceCandidates } = JSON.parse(atob(connectionString));
      
      this.status$.next('Setting remote description...');
      await this.peerConnection?.setRemoteDescription(new RTCSessionDescription(sdp));

      this.status$.next('Adding ICE candidates...');
      for (const candidate of iceCandidates || []) {
        await this.peerConnection?.addIceCandidate(new RTCIceCandidate(candidate));
      }

      if (sdp.type === 'offer') {
        this.status$.next('Creating answer...');
        const answer = await this.peerConnection?.createAnswer();
        await this.peerConnection?.setLocalDescription(answer);
        
        const fullDesc = {
          sdp: answer,
          iceCandidates: this.iceCandidates
        };
        
        this.connectionString$.next(btoa(JSON.stringify(fullDesc)));
        this.status$.next('Answer created - share this code back with the host');
      }
    } catch (error) {
      this.error$.next(`Failed to join game: ${error}`);
      this.connectionState$.next('disconnected');
    }
  }

  async handleAnswer(connectionString: string) {
    try {
      if (!connectionString.trim()) {
        throw new Error('Answer code is empty');
      }

      this.status$.next('Processing answer from peer...');
      const { sdp, iceCandidates } = JSON.parse(atob(connectionString));
      
      if (!sdp || !sdp.type || sdp.type !== 'answer') {
        throw new Error('Invalid answer format');
      }

      this.status$.next('Setting remote description from answer...');
      await this.peerConnection?.setRemoteDescription(new RTCSessionDescription(sdp));

      if (iceCandidates && iceCandidates.length > 0) {
        this.status$.next(`Adding ${iceCandidates.length} ICE candidates from answer...`);
        for (const candidate of iceCandidates) {
          try {
            await this.peerConnection?.addIceCandidate(new RTCIceCandidate(candidate));
            this.status$.next('ICE candidate added successfully');
          } catch (error) {
            this.status$.next(`Failed to add ICE candidate: ${error}`);
          }
        }
      }

      this.peerConnection!.onconnectionstatechange = () => {
        const state = this.peerConnection?.connectionState;
        this.status$.next(`Connection state changed to: ${state}`);
        
        if (state === 'connected') {
          this.connectionState$.next('connected');
        } else if (state === 'failed' || state === 'disconnected' || state === 'closed') {
          this.error$.next(`Connection ${state}`);
          this.connectionState$.next('disconnected');
        }
      };

      this.peerConnection!.oniceconnectionstatechange = () => {
        const state = this.peerConnection?.iceConnectionState;
        this.status$.next(`ICE connection state changed to: ${state}`);
        
        if (state === 'connected') {
          this.status$.next('ICE connection established');
        } else if (state === 'failed') {
          this.error$.next('ICE connection failed');
          this.connectionState$.next('disconnected');
        }
      };

      this.status$.next(`Current connection state: ${this.peerConnection?.connectionState}`);
      this.status$.next(`Current ICE connection state: ${this.peerConnection?.iceConnectionState}`);
      this.status$.next(`Current signaling state: ${this.peerConnection?.signalingState}`);

      if (this.peerConnection?.connectionState === 'connected') {
        this.connectionState$.next('connected');
      }

    } catch (error) {
      this.error$.next(`Failed to process answer: ${error}`);
      this.connectionState$.next('disconnected');
    }
  }

  sendMessage(message: GameMessage) {
    if (this.dataChannel?.readyState === 'open') {
      try {
        this.dataChannel.send(JSON.stringify(message));
      } catch (error) {
        this.error$.next(`Failed to send message: ${error}`);
      }
    } else {
      this.error$.next('Cannot send message: Data channel not open');
    }
  }

  cleanup() {
    this.status$.next('Cleaning up connection...');
    this.dataChannel?.close();
    this.peerConnection?.close();
    this.connectionState$.next('disconnected');
  }
} 