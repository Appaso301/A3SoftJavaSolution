import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './../angularMaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  HeaderComponent} from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FreedemoComponent } from './pages/freedemo/freedemo.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FreedemoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }