import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
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
  { 
    path: 'p2p', 
    loadComponent: () => import('./pages/p2p/p2p.component')
      .then(m => m.P2pComponent),
    title: 'P2P Ping Pong'
  },
  { path: '**', redirectTo: '' }
];
