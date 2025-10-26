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
  yearsOfExperience: string;

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {
    this.yearsOfExperience = this.calculateYearsOfExperience();
  }

  private calculateYearsOfExperience(): string {
    const startDate = new Date('2017-05-01');
    const now = new Date();
    const years = now.getFullYear() - startDate.getFullYear();
    const monthDiff = now.getMonth() - startDate.getMonth();
    const numYears = monthDiff < 0 ? years - 1 : years;

    const numberWords = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
    return numYears <= 10 ? numberWords[numYears] : numYears.toString();
  }

  scrollToSection(elementId: string): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.smoothScrollTo(elementId);
        }, 100);
      });
    } else {
      this.smoothScrollTo(elementId);
    }
  }

  private smoothScrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
} 