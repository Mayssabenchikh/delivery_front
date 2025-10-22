import { Routes } from '@angular/router';
import { SignUpComponent } from './features/authentication/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: '**',
    redirectTo: 'signup'
  }
];