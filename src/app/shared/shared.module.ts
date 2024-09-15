import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './../pages/footer/footer.component';
import { WarningPopUpComponent } from './warning-pop-up/warning-pop-up.component'; // Adjust the path as needed

@NgModule({
  declarations: [FooterComponent, WarningPopUpComponent],
  imports: [CommonModule],
  exports: [FooterComponent] // Exporting the FooterComponent
})
export class SharedModule {}
