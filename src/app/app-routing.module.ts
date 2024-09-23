import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FreedemoComponent } from './pages/freedemo/freedemo.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { OtpVerificationComponent } from './pages/otp-verification/otp-verification.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'freedemo', component: FreedemoComponent },
  { path: 'contactUs', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'forgot-password', component:ForgotPasswordComponent },
  { path: 'otp-verification', component:OtpVerificationComponent },
  { path: 'aboutUs', component: AboutusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cource', loadChildren: () => import('./pages/cources/cources.module').then(m => m.CourcesModule) },
  { path: '**', redirectTo: '/home' } // Fallback for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
