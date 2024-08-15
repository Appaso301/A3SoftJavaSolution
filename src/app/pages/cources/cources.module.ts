import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './../../../angularMaterial.module';
import { CourcesRoutingModule } from './cources-routing.module';
import { CourcesComponent } from './cources.component';
import { CorejavaComponent } from './corejava/corejava.component'

@NgModule({
  declarations: [
    CourcesComponent,
    CorejavaComponent
  ],
  imports: [
    CommonModule,
    CourcesRoutingModule,
    AngularMaterialModule
  ]
})
export class CourcesModule { }
