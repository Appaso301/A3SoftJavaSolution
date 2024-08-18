import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './../pages/footer/footer.component'; // Adjust the path as needed

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule],
  exports: [FooterComponent] // Exporting the FooterComponent
})
export class SharedModule {}
