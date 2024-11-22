import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(this.getInitialTheme());
  isDarkMode$ = this.darkMode.asObservable();

  constructor() {
    this.updateThemeClass(this.darkMode.value);
    this.watchSystemTheme();
  }

  private getInitialTheme(): boolean {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      return savedTheme === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggleTheme() {
    const newValue = !this.darkMode.value;
    this.darkMode.next(newValue);
    localStorage.setItem('darkMode', String(newValue));
    this.updateThemeClass(newValue);
  }

  private updateThemeClass(isDark: boolean) {
    document.body.classList.toggle('dark-theme', isDark);
  }

  private watchSystemTheme() {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        if (!localStorage.getItem('darkMode')) {
          const newValue = e.matches;
          this.darkMode.next(newValue);
          this.updateThemeClass(newValue);
        }
      });
  }
} 