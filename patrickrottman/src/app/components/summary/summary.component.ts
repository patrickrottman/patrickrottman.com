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
  yearsOfExperience: number;

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {
    this.yearsOfExperience = this.calculateYearsOfExperience();
  }

  private calculateYearsOfExperience(): number {
    const startDate = new Date('2017-05-01');
    const now = new Date();
    const years = now.getFullYear() - startDate.getFullYear();
    const monthDiff = now.getMonth() - startDate.getMonth();
    return monthDiff < 0 ? years - 1 : years;
  }

  scrollToSection(elementId: string): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(elementId);
        }, 100);
      });
    } else {
      this.viewportScroller.scrollToAnchor(elementId);
    }
  }
} 