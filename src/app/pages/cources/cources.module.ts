import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './../../../angularMaterial.module';
import { CourcesRoutingModule } from './cources-routing.module';
import { CourcesComponent } from './cources.component';
import { CorejavaComponent } from './corejava/corejava.component';
import { SharedModule} from './../../shared/shared.module';
import { AdvancejavaComponent } from './advancejava/advancejava.component'
import { NgImageSliderModule } from 'ng-image-slider';
@NgModule({
  declarations: [
    CourcesComponent,
    CorejavaComponent,
    AdvancejavaComponent
  ],
  imports: [
    CommonModule,
    CourcesRoutingModule,
    AngularMaterialModule,
    SharedModule,
    NgImageSliderModule
  ]
})
export class CourcesModule { }
