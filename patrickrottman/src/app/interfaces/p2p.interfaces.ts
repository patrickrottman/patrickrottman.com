export interface P2PMessage {
  type: string;
  payload: unknown;
}

export interface PaddleMoveMessage extends P2PMessage {
  type: 'paddleMove';
  payload: {
    position: number;
  };
}

export interface GameStartMessage extends P2PMessage {
  type: 'gameStart';
  payload: null;
}

export interface BallSyncMessage extends P2PMessage {
  type: 'ballSync';
  payload: {
    ball: BallState;
    playerScore: number;
    opponentScore: number;
  };
}

export interface BallState {
  x: number;
  y: number;
  dx: number;
  dy: number;
}

export interface GameState {
  playerScore: number;
  opponentScore: number;
  ballPosition: BallState;
  paddlePosition: number;
  opponentPaddlePosition: number;
}

export type ConnectionState = 'disconnected' | 'connecting' | 'connected';
export type PongState = 'waiting' | 'playing';

export interface GameEndMessage extends P2PMessage {
  type: 'gameEnd';
  payload: null;
}

export type GameMessage = PaddleMoveMessage | GameStartMessage | BallSyncMessage | GameEndMessage; 