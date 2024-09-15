import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-warning-pop-up',
  templateUrl: './warning-pop-up.component.html',
  styleUrls: ['./warning-pop-up.component.css']
})
export class WarningPopUpComponent {
  constructor(public dialogRef: MatDialogRef<WarningPopUpComponent>) {}

  closePopup(): void {
    this.dialogRef.close();
  }
}
