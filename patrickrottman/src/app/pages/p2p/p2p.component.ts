import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { P2pService } from '../../services/p2p.service';
import { PongService } from '../../services/pong.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ConnectionState, GameState, PongState } from '../../interfaces/p2p.interfaces';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface LogEntry {
  message: string;
  type: 'status' | 'error';
  timestamp: Date;
}

@Component({
  selector: 'app-p2p',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  templateUrl: './p2p.component.html',
  styleUrl: './p2p.component.scss',
  animations: [
    trigger('slideUp', [
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1,
        height: '*'
      })),
      state('hidden', style({
        transform: 'translateY(-100%)',
        opacity: 0,
        height: '0',
        margin: '0'
      })),
      transition('visible => hidden', [
        animate('0.3s ease-out')
      ]),
      transition('hidden => visible', [
        animate('0.3s ease-in')
      ])
    ])
  ]
})
export class P2pComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private readonly PADDLE_SPEED = 3;
  private lastCopiedString = '';
  isHost = false;

  gameState$ = new BehaviorSubject<GameState>({
    playerScore: 0,
    opponentScore: 0,
    ballPosition: { x: 50, y: 50, dx: 2, dy: 2 },
    paddlePosition: 50,
    opponentPaddlePosition: 50
  });
  connectionState$ = new BehaviorSubject<ConnectionState>('disconnected');
  pongState$ = new BehaviorSubject<PongState>('waiting');
  localConnectionString = '';
  remoteConnectionString = '';
  connectionStatus = '';
  connectionLogs: LogEntry[] = [];

  @HostListener('window:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    if (this.pongState$.value !== 'playing') return;

    const currentState = this.gameState$.value;
    switch (event.key) {
      case 'ArrowUp':
        this.pongService.movePaddle(
          Math.max(0, currentState.paddlePosition - this.PADDLE_SPEED)
        );
        break;
      case 'ArrowDown':
        this.pongService.movePaddle(
          Math.min(100, currentState.paddlePosition + this.PADDLE_SPEED)
        );
        break;
    }
  }
  
  constructor(
    private p2pService: P2pService,
    private pongService: PongService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.gameState$ = this.pongService.gameState$;
    this.connectionState$ = this.p2pService.connectionState$;
    this.pongState$ = this.pongService.pongState$;

    this.p2pService.connectionString$
      .pipe(takeUntil(this.destroy$))
      .subscribe(str => {
        if (str && str !== this.lastCopiedString) {
          this.lastCopiedString = str;
          this.localConnectionString = str;
          if (this.isHost) {
            navigator.clipboard.writeText(str);
            this.snackBar.open('Connection code copied to clipboard!', 'Close', { duration: 3000 });
          }
        }
      });
      
    this.p2pService.status$
      .pipe(takeUntil(this.destroy$))
      .subscribe(status => {
        this.connectionStatus = status;
        this.addLog(status, 'status');
      });
      
    this.p2pService.error$
      .pipe(takeUntil(this.destroy$))
      .subscribe(error => {
        this.snackBar.open(error, 'Close', { duration: 5000 });
        this.addLog(error, 'error');
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.pongService.cleanup();
  }

  createGame() {
    this.isHost = true;
    this.pongService.createGame();
  }

  joinGame() {
    this.isHost = false;
    this.pongService.joinGame(this.remoteConnectionString);
    this.remoteConnectionString = '';
  }

  async handleRemoteConnection() {
    if (this.localConnectionString && this.remoteConnectionString) {
      await this.p2pService.handleAnswer(this.remoteConnectionString);
      this.remoteConnectionString = '';
    }
  }

  copyConnectionString() {
    navigator.clipboard.writeText(this.localConnectionString);
    this.snackBar.open('Connection string copied!', 'Close', { duration: 2000 });
  }

  startGame() {
    this.pongService.startGame();
  }

  private addLog(message: string, type: 'status' | 'error') {
    const lastLog = this.connectionLogs[0];
    if (lastLog && lastLog.message === message) {
      return;
    }

    this.connectionLogs = [{
      message,
      type,
      timestamp: new Date()
    }, ...this.connectionLogs].slice(0, 50);
  }
} 