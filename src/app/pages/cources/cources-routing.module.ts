import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourcesComponent } from './cources.component';
import { CorejavaComponent } from './corejava/corejava.component';
import { AdvancejavaComponent } from './advancejava/advancejava.component';

const routes: Routes = [
  { path: '', component: CourcesComponent },
  { path: 'corejava', component: CorejavaComponent },
  { path: 'advancejava', component: AdvancejavaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourcesRoutingModule { }
