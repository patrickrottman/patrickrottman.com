import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { P2pService } from './p2p.service';
import { 
  GameState, 
  PongState, 
  GameMessage, 
  BallState,
  PaddleMoveMessage,
  GameStartMessage,
  BallSyncMessage 
} from '../interfaces/p2p.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PongService {
  private gameLoop: number | null = null;
  private isHost = false;

  private readonly BALL_SPEED = 1;

  gameState$ = new BehaviorSubject<GameState>({
    playerScore: 0,
    opponentScore: 0,
    ballPosition: { x: 50, y: 50, dx: 2, dy: 2 },
    paddlePosition: 50,
    opponentPaddlePosition: 50
  });
  
  pongState$ = new BehaviorSubject<PongState>('waiting');

  constructor(private p2pService: P2pService) {
    this.p2pService.message$.subscribe(message => {
      this.handleGameMessage(message);
    });
  }

  private handleGameMessage(message: GameMessage) {
    const currentState = this.gameState$.value;
    
    switch (message.type) {
      case 'paddleMove':
        this.gameState$.next({
          ...currentState,
          opponentPaddlePosition: message.payload.position
        });
        break;
      case 'gameStart':
        this.startGame();
        break;
      case 'ballSync':
        if (!this.isHost) {
          this.gameState$.next({
            ...currentState,
            ballPosition: message.payload.ball
          });
        }
        break;
    }
  }

  createGame() {
    this.isHost = true;
    return this.p2pService.createConnection();
  }

  joinGame(connectionString: string) {
    return this.p2pService.joinConnection(connectionString);
  }

  startGame() {
    this.pongState$.next('playing');
    if (this.isHost) {
      const message: GameStartMessage = {
        type: 'gameStart',
        payload: null
      };
      this.p2pService.sendMessage(message);
      this.startGameLoop();
    }
  }

  movePaddle(position: number) {
    const currentState = this.gameState$.value;
    this.gameState$.next({
      ...currentState,
      paddlePosition: position
    });
    
    const message: PaddleMoveMessage = {
      type: 'paddleMove',
      payload: { position }
    };
    this.p2pService.sendMessage(message);
  }

  private startGameLoop() {
    const gameLoop = () => {
      if (this.pongState$.value !== 'playing') return;
      
      if (this.isHost) {
        this.updateBallPosition();
        const message: BallSyncMessage = {
          type: 'ballSync',
          payload: {
            ball: this.gameState$.value.ballPosition
          }
        };
        this.p2pService.sendMessage(message);
      }
      
      this.gameLoop = requestAnimationFrame(gameLoop);
    };
    
    this.gameLoop = requestAnimationFrame(gameLoop);
  }

  private updateBallPosition() {
    const currentState = this.gameState$.value;
    const newBall = { ...currentState.ballPosition };
    
    newBall.x += newBall.dx * this.BALL_SPEED;
    newBall.y += newBall.dy * this.BALL_SPEED;

    if (newBall.y <= 0 || newBall.y >= 100) {
      newBall.dy *= -1;
    }

    const paddleWidth = 2;
    const paddleHeight = 15;

    if (newBall.x <= paddleWidth && 
        newBall.y >= currentState.paddlePosition - paddleHeight/2 && 
        newBall.y <= currentState.paddlePosition + paddleHeight/2) {
      newBall.dx *= -1;
      newBall.x = paddleWidth;
    }

    if (newBall.x >= 100 - paddleWidth && 
        newBall.y >= currentState.opponentPaddlePosition - paddleHeight/2 && 
        newBall.y <= currentState.opponentPaddlePosition + paddleHeight/2) {
      newBall.dx *= -1;
      newBall.x = 100 - paddleWidth;
    }

    let { playerScore, opponentScore } = currentState;

    if (newBall.x <= 0) {
      opponentScore++;
      const resetBall = this.resetBall();
      newBall.x = resetBall.x;
      newBall.y = resetBall.y;
      newBall.dx = resetBall.dx;
      newBall.dy = resetBall.dy;
    }

    if (newBall.x >= 100) {
      playerScore++;
      const resetBall = this.resetBall();
      newBall.x = resetBall.x;
      newBall.y = resetBall.y;
      newBall.dx = resetBall.dx;
      newBall.dy = resetBall.dy;
    }

    this.gameState$.next({
      ...currentState,
      ballPosition: newBall,
      playerScore,
      opponentScore
    });
  }

  private resetBall(): BallState {
    return {
      x: 50,
      y: 50,
      dx: Math.random() > 0.5 ? 2 : -2,
      dy: Math.random() > 0.5 ? 2 : -2
    };
  }

  cleanup() {
    if (this.gameLoop) {
      cancelAnimationFrame(this.gameLoop);
    }
    this.p2pService.cleanup();
  }
} 