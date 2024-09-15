import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WarningPopUpComponent } from './shared/warning-pop-up/warning-pop-up.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A3SoftSolutions';
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.showWarningPopup();
  }

  showWarningPopup(): void {
    this.dialog.open(WarningPopUpComponent, {
      width: '300px',
    });
  }
}
