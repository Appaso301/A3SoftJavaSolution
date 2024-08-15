import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FreedemoComponent } from './pages/freedemo/freedemo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'freedemo', component: FreedemoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cource', loadChildren: () => import('./pages/cources/cources.module').then(m => m.CourcesModule) },
  { path: '**', redirectTo: '/home' } // Fallback for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
