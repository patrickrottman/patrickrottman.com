import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Peer, DataConnection } from 'peerjs';
import { ConnectionState, GameMessage } from '../interfaces/p2p.interfaces';

interface PingMessage {
  type: 'ping';
}

interface PongMessage {
  type: 'pong';
}

type ConnectionMessage = PingMessage | PongMessage | GameMessage;

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
      
      this.peer = new Peer(peerId);

      this.peer.on('open', (id) => {
        this.status$.next(`Peer initialized with ID: ${id}`);
        this.connectionId$.next(id);
      });

      this.peer.on('connection', (conn) => {
        this.status$.next(`Incoming connection from: ${conn.peer}`);
        this.handleConnection(conn);
      });

      this.peer.on('error', (error) => {
        this.status$.next(`Peer error type: ${error.type}`);
        this.error$.next(`Connection error: ${error.message}`);
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
    this.status$.next(`Setting up connection with: ${conn.peer}`);

    conn.on('open', () => {
      this.status$.next(`Connection opened with: ${conn.peer}`);
      this.connectionState$.next('connected');
      
      // Send initial ping
      conn.send({ type: 'ping' } as PingMessage);
    });

    conn.on('data', (data: unknown) => {
      try {
        const message = data as ConnectionMessage;
        
        if (message.type === 'ping') {
          conn.send({ type: 'pong' } as PongMessage);
          return;
        }
        if (message.type === 'pong') {
          this.status$.next('Connection verified with pong');
          return;
        }
        
        this.status$.next(`Received message: ${JSON.stringify(message)}`);
        this.message$.next(message as GameMessage);
      } catch (error) {
        this.error$.next('Invalid message format');
      }
    });

    conn.on('close', () => {
      this.status$.next('Connection closed');
      this.connectionState$.next('disconnected');
    });

    conn.on('error', (error) => {
      this.error$.next(`Connection error: ${error}`);
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

      // Wait for our peer to be ready before connecting
      let attempts = 0;
      const maxAttempts = 10;
      
      const waitForPeer = setInterval(() => {
        attempts++;
        this.status$.next(`Waiting for peer initialization... (${attempts}/${maxAttempts})`);

        if (this.peer?.id) {
          clearInterval(waitForPeer);
          this.status$.next(`Connecting to peer: ${peerId}`);
          
          const conn = this.peer.connect(peerId, {
            reliable: true,
            serialization: 'json'
          });

          this.status$.next('Connection attempt started');
          this.handleConnection(conn);
        } else if (attempts >= maxAttempts) {
          clearInterval(waitForPeer);
          this.error$.next('Failed to initialize peer connection');
          this.connectionState$.next('disconnected');
        }
      }, 1000);

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