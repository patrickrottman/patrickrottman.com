import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeService } from '../../services/theme.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
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
    this.router.navigate(['/home']).then(() => {
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(elementId);
      }, 100);
    });
  }

  navigateHome(): void {
    this.router.navigate(['/home']).then(() => {
      window.scrollTo(0, 0);
    });
  }
} 