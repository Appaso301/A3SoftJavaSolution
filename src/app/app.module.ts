import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './../angularMaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  HeaderComponent} from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FreedemoComponent } from './pages/freedemo/freedemo.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { OtpVerificationComponent } from './pages/otp-verification/otp-verification.component';

import { AboutusComponent } from './pages/aboutus/aboutus.component';
@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FreedemoComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    OtpVerificationComponent,
    AboutusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }