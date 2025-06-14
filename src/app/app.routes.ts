import { Routes } from '@angular/router';
import { chaptersRoutes } from './chapters/chapters.routes';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'chapter',
    children: chaptersRoutes,
  },
  {
    path: 'leaderboards',
    loadComponent: () => import('./leaderboards/leaderboards.component').then((m) => m.LeaderboardsComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
