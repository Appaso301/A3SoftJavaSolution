import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourcesComponent } from './cources.component';
import { CorejavaComponent } from './corejava/corejava.component';

const routes: Routes = [
  { path: '', component: CourcesComponent },
  { path: 'corejava', component: CorejavaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourcesRoutingModule { }
