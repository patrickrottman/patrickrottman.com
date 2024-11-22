import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadComponent: () => import('./pages/home/home.component')
      .then(m => m.HomeComponent),
    title: 'Patrick Rottman - Full Stack Software Engineer'
  },
  { 
    path: 'blog', 
    loadComponent: () => import('./pages/blog/blog.component')
      .then(m => m.BlogComponent),
    title: 'Blog - Patrick Rottman'
  },
  { path: '**', redirectTo: 'home' }
];
