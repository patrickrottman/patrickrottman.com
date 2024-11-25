import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { PongService } from '../../services/pong.service';
import { GameState } from '../../interfaces/p2p.interfaces';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pong-game-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './pong-game-modal.component.html',
  styleUrls: ['./pong-game-modal.component.scss']
})
export class PongGameModalComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private readonly PADDLE_SPEED = 3;
  private isDragging = false;
  private dragStartY: number | null = null;
  private dragStartPaddlePos: number | null = null;
  
  gameState$ = new BehaviorSubject<GameState>({
    playerScore: 0,
    opponentScore: 0,
    ballPosition: { x: 50, y: 50, dx: 2, dy: 2 },
    paddlePosition: 50,
    opponentPaddlePosition: 50
  });

  constructor(
    private dialogRef: MatDialogRef<PongGameModalComponent>,
    private pongService: PongService
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.gameState$ = this.pongService.gameState$;
    
    // Subscribe to game end events
    this.pongService.onGameEnd
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.dialogRef.close();
      });
      
    this.pongService.startGame();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
    }

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
      case 'Escape':
        this.closeGame();
        break;
    }
  }

  onPaddleMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.isDragging = true;
    this.dragStartY = event.clientY;
    this.dragStartPaddlePos = this.gameState$.value.paddlePosition;
  }

  onPaddleTouchStart(event: TouchEvent) {
    event.preventDefault();
    this.isDragging = true;
    this.dragStartY = event.touches[0].clientY;
    this.dragStartPaddlePos = this.gameState$.value.paddlePosition;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging || this.dragStartY === null || this.dragStartPaddlePos === null) return;
    this.updatePaddlePosition(event.clientY);
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (!this.isDragging || this.dragStartY === null || this.dragStartPaddlePos === null) return;
    this.updatePaddlePosition(event.touches[0].clientY);
  }

  private updatePaddlePosition(currentY: number) {
    if (this.dragStartY === null || this.dragStartPaddlePos === null) return;
    
    const deltaY = currentY - this.dragStartY;
    const gameBoard = document.querySelector('.game-board');
    if (!gameBoard) return;

    const boardHeight = gameBoard.getBoundingClientRect().height;
    const percentageDelta = (deltaY / boardHeight) * 100;
    
    const newPosition = Math.max(0, Math.min(100, this.dragStartPaddlePos + percentageDelta));
    this.pongService.movePaddle(newPosition);
  }

  @HostListener('window:mouseup')
  @HostListener('window:touchend')
  onDragEnd() {
    this.isDragging = false;
    this.dragStartY = null;
    this.dragStartPaddlePos = null;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.pongService.cleanup();
  }

  closeGame() {
    this.dialogRef.close();
  }
} 