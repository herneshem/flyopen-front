import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: Login
  },
  {
    path: 'main-layout',
    component: MainLayoutComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
