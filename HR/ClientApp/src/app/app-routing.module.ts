import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { RequestPasswordComponent } from './auth/request-password/request-password.component';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
