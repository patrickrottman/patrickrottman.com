import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { P2pService } from './p2p.service';
import { 
  GameState, 
  PongState, 
  GameMessage, 
  BallState,
  PaddleMoveMessage,
  GameStartMessage,
  BallSyncMessage,
  GameEndMessage
} from '../interfaces/p2p.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PongService {
  private gameLoop: number | null = null;
  private isHost = false;

  private readonly BALL_SPEED = 0.3;
  private readonly INITIAL_BALL_VELOCITY = 1;

  gameState$ = new BehaviorSubject<GameState>({
    playerScore: 0,
    opponentScore: 0,
    ballPosition: { x: 50, y: 50, dx: 2, dy: 2 },
    paddlePosition: 50,
    opponentPaddlePosition: 50
  });
  
  pongState$ = new BehaviorSubject<PongState>('waiting');

  // Add new subject for game end events
  private gameEnd$ = new Subject<void>();
  
  // Add getter for gameEnd observable
  get onGameEnd() {
    return this.gameEnd$.asObservable();
  }

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
        this.pongState$.next('playing');
        if (this.isHost) {
          this.startGameLoop();
        }
        break;
      case 'ballSync':
        if (!this.isHost) {
          // Mirror the ball position for client
          const mirroredBall = {
            ...message.payload.ball,
            x: 100 - message.payload.ball.x,  // Mirror X position
            dx: -message.payload.ball.dx      // Reverse X velocity
          };
          
          this.gameState$.next({
            ...currentState,
            ballPosition: mirroredBall,
            playerScore: message.payload.opponentScore,
            opponentScore: message.payload.playerScore
          });
        }
        break;
      case 'gameEnd':
        this.gameEnd$.next();
        this.cleanup();
        break;
    }
  }

  createGame() {
    this.isHost = true;
    this.p2pService.createGame();
  }

  joinGame(peerId: string) {
    this.isHost = false;
    this.p2pService.joinGame(peerId);
  }

  startGame() {
    this.pongState$.next('playing');
    
    const message: GameStartMessage = {
      type: 'gameStart',
      payload: null
    };
    this.p2pService.sendMessage(message);
    
    if (this.isHost) {
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
        const currentState = this.gameState$.value;
        const message: BallSyncMessage = {
          type: 'ballSync',
          payload: {
            ball: currentState.ballPosition,
            playerScore: currentState.playerScore,
            opponentScore: currentState.opponentScore
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
    let { playerScore, opponentScore } = currentState;
    
    newBall.x += newBall.dx * this.BALL_SPEED;
    newBall.y += newBall.dy * this.BALL_SPEED;

    if (newBall.y <= 0 || newBall.y >= 100) {
      newBall.dy *= -1;
      newBall.y = newBall.y <= 0 ? 0 : 100;
    }

    const paddleWidth = 1;
    const paddleHeight = 20;
    const ballSize = 2;

    if (newBall.x - ballSize/2 <= paddleWidth && 
        newBall.y >= currentState.opponentPaddlePosition - paddleHeight/2 && 
        newBall.y <= currentState.opponentPaddlePosition + paddleHeight/2) {
      const relativeIntersectY = (currentState.opponentPaddlePosition - newBall.y) / (paddleHeight/2);
      const bounceAngle = relativeIntersectY * 0.75;
      
      newBall.dx = Math.abs(newBall.dx);
      newBall.dy = -bounceAngle * Math.abs(newBall.dx);
      newBall.x = paddleWidth + ballSize/2;
    }

    if (newBall.x + ballSize/2 >= 100 - paddleWidth && 
        newBall.y >= currentState.paddlePosition - paddleHeight/2 && 
        newBall.y <= currentState.paddlePosition + paddleHeight/2) {
      const relativeIntersectY = (currentState.paddlePosition - newBall.y) / (paddleHeight/2);
      const bounceAngle = relativeIntersectY * 0.75;
      
      newBall.dx = -Math.abs(newBall.dx);
      newBall.dy = -bounceAngle * Math.abs(newBall.dx);
      newBall.x = 100 - paddleWidth - ballSize/2;
    }

    if (newBall.x - ballSize/2 <= 0) {
      playerScore++;
      Object.assign(newBall, this.resetBall());
    }

    if (newBall.x + ballSize/2 >= 100) {
      opponentScore++;
      Object.assign(newBall, this.resetBall());
    }

    this.gameState$.next({
      ...currentState,
      ballPosition: newBall,
      playerScore,
      opponentScore
    });

    const message: BallSyncMessage = {
      type: 'ballSync',
      payload: {
        ball: newBall,
        playerScore,
        opponentScore
      }
    };
    this.p2pService.sendMessage(message);
  }

  private resetBall(): BallState {
    return {
      x: 50,
      y: 50,
      dx: (Math.random() > 0.5 ? 1 : -1) * this.INITIAL_BALL_VELOCITY,
      dy: (Math.random() > 0.5 ? 1 : -1) * this.INITIAL_BALL_VELOCITY
    };
  }

  cleanup() {
    if (this.gameLoop) {
      cancelAnimationFrame(this.gameLoop);
      this.gameLoop = null;
    }
    
    // Send cleanup message to other player
    const message: GameEndMessage = {
      type: 'gameEnd',
      payload: null
    };
    this.p2pService.sendMessage(message);
    
    // Full reset of all states
    this.isHost = false;
    this.pongState$.next('waiting');
    this.gameState$.next({
      playerScore: 0,
      opponentScore: 0,
      ballPosition: { x: 50, y: 50, dx: 2, dy: 2 },
      paddlePosition: 50,
      opponentPaddlePosition: 50
    });

    // Also cleanup P2P connection
    this.p2pService.cleanup();
  }
} 