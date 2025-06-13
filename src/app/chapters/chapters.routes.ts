import { Routes } from '@angular/router';

export const chaptersRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./chapter-container/chapter-container.component').then(m => m.ChapterContainerComponent)
  },
  {
    path: 'video',
    loadComponent: () => import('./video-chapter/video-chapter.component').then(m => m.VideoChapterComponent)
  },
  {
    path: 'speed-text',
    loadComponent: () => import('./speed-text-chapter/speed-text-chapter.component').then(m => m.SpeedTextChapterComponent)
  }
];
