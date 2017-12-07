import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage';
import { SecondpageComponent } from './pages/secondpage';

export const APP_ROUTES: Routes = [
    {path: '', component: HomepageComponent, pathMatch: 'full', data: {}},
    {path: 'second', component: SecondpageComponent, data: {}},     // This is just a placeholder; should change Link depending on your app
    {path: '**', redirectTo: ''}
];
