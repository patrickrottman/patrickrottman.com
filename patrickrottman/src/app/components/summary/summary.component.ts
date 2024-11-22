import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  title = 'Patrick Rottman';

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

  scrollToSection(elementId: string): void {
    this.router.navigate(['/home']).then(() => {
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(elementId);
      }, 100);
    });
  }
} 