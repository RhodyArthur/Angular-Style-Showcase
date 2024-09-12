import { Routes } from '@angular/router';



export const routes: Routes = [
        {
            path: 'content2',
            loadComponent: () => import('./components/main-content/content2/content2.component').then(m => m.Content2Component)
        }

];
