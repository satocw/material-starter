import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage';

export const APP_ROUTES: Routes = [
    {path: '', component: HomepageComponent, pathMatch: 'full', data: {}},
    {path: '**', redirectTo: ''}
];
