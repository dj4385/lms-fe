import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/landing-page-layout/landing-page-layout.component').then(c => c.LandingPageLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./modules/landing-page/landing-page.component').then(c => c.LandingPageComponent)
            }
        ]
    }
];
