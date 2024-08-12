import { Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { RazorPageComponent } from './components/razor-page/razor-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DetailedPageComponent } from './components/detailed-page/detailed-page.component';

export const routes: Routes = [
    { path: 'home-page', component: HomePageComponent},
    { path: 'detailed-page', component: DetailedPageComponent},
    { path: 'login-page', component: LoginPageComponent},
    { path: 'razor-page', component: RazorPageComponent}
];
