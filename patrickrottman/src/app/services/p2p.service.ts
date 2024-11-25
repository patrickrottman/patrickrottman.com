import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Peer, DataConnection } from 'peerjs';
import { ConnectionState, GameMessage } from '../interfaces/p2p.interfaces';

@Injectable({
  providedIn: 'root'
})
export class P2pService {
  private peer: Peer | null = null;
  private connection: DataConnection | null = null;

  connectionState$ = new BehaviorSubject<ConnectionState>('disconnected');
  connectionId$ = new BehaviorSubject<string>('');
  message$ = new Subject<GameMessage>();
  error$ = new Subject<string>();
  status$ = new Subject<string>();

  initializePeer() {
    try {
      this.status$.next('Initializing peer connection...');
      const peerId = crypto.randomUUID();
      
      this.peer = new Peer(peerId, {
        host: '0.peerjs.com',
        secure: true,
        port: 443,
        debug: 3,
        config: {
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' }
          ]
        }
      });

      this.peer.on('open', (id) => {
        this.status$.next(`Peer initialized with ID: ${id}`);
        this.connectionId$.next(id);
      });

      this.peer.on('connection', (conn) => {
        this.status$.next(`Incoming connection from: ${conn.peer}`);
        this.handleConnection(conn);
      });

      this.peer.on('disconnected', () => {
        this.status$.next('Peer disconnected - attempting to reconnect...');
        this.peer?.reconnect();
      });

      this.peer.on('error', (error) => {
        this.error$.next(`Peer error: ${error.type} - ${error.message}`);
        this.connectionState$.next('disconnected');
      });

    } catch (error) {
      this.error$.next(`Failed to initialize peer: ${error}`);
      this.connectionState$.next('disconnected');
    }
  }

  private handleConnection(conn: DataConnection) {
    this.connection = conn;
    this.connectionState$.next('connecting');

    conn.on('open', () => {
      this.status$.next(`Connection established (${conn.peer})`);
      this.connectionState$.next('connected');
    });

    conn.on('data', (data) => {
      try {
        this.status$.next(`Received message: ${JSON.stringify(data)}`);
        this.message$.next(data as GameMessage);
      } catch (error) {
        this.error$.next('Invalid message format');
      }
    });

    conn.on('close', () => {
      this.status$.next('Connection closed');
      this.connectionState$.next('disconnected');
    });

    conn.on('error', (error) => {
      this.error$.next(`Connection error: ${error.message}`);
      this.connectionState$.next('disconnected');
    });
  }

  createGame() {
    this.status$.next('Creating new game...');
    this.initializePeer();
  }

  joinGame(peerId: string) {
    try {
      if (!peerId.trim()) {
        throw new Error('Peer ID is empty');
      }

      this.status$.next('Joining game...');
      this.initializePeer();

      let peerReadyAttempts = 0;
      const maxAttempts = 30; // 3 seconds total

      // Wait for our peer to be ready
      const waitForPeer = setInterval(() => {
        peerReadyAttempts++;
        this.status$.next(`Waiting for peer initialization... (${peerReadyAttempts}/${maxAttempts})`);

        if (this.peer?.id) {
          clearInterval(waitForPeer);
          this.status$.next(`Connecting to peer: ${peerId}`);
          
          const conn = this.peer.connect(peerId, {
            reliable: true,
            serialization: 'json'
          });

          this.status$.next('Connection attempt started...');

          conn.on('open', () => {
            this.status$.next('Connection opened to host');
            this.handleConnection(conn);
          });

          conn.on('error', (err) => {
            this.error$.next(`Connection error: ${err.message}`);
            this.connectionState$.next('disconnected');
          });
        } else if (peerReadyAttempts >= maxAttempts) {
          clearInterval(waitForPeer);
          this.error$.next('Peer initialization timed out');
          this.connectionState$.next('disconnected');
        }
      }, 100);

      // Increase timeout to 30 seconds
      setTimeout(() => {
        clearInterval(waitForPeer);
        if (this.connectionState$.value !== 'connected') {
          this.error$.next('Connection attempt timed out. Possible issues:\n' + 
            '1. Invalid peer ID\n' + 
            '2. Host disconnected\n' + 
            '3. Network connectivity issues');
          this.connectionState$.next('disconnected');
          this.cleanup();
        }
      }, 30000);

    } catch (error) {
      this.error$.next(`Failed to join game: ${error}`);
      this.connectionState$.next('disconnected');
    }
  }

  sendMessage(message: GameMessage) {
    if (this.connection?.open) {
      try {
        this.connection.send(message);
      } catch (error) {
        this.error$.next(`Failed to send message: ${error}`);
      }
    } else {
      this.error$.next('Cannot send message: Connection not open');
    }
  }

  cleanup() {
    this.status$.next('Cleaning up connection...');
    this.connection?.close();
    this.peer?.destroy();
    this.connection = null;
    this.peer = null;
    this.connectionState$.next('disconnected');
  }
} 