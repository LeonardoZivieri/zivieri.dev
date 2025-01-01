import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent)
    }
];
