import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeService } from '../../services/theme.service';
import { ViewportScroller } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    public themeService: ThemeService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

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

  navigateHome(): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        window.scrollTo(0, 0);
      });
    } else {
      window.scrollTo(0, 0);
    }
  }
} 