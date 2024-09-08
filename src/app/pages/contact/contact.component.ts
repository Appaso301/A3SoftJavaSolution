import { Component } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  foods: Food[] = [
    {value: '9TO10', viewValue: '9AM TO 10AM'},
    {value: '10TO11', viewValue: '10AM TO 11AM'},
    {value: '11TO12', viewValue: '11AM TO 12AM'},
    {value: '12TO01', viewValue: '12AM TO 01PM'},
    {value: '01TO02', viewValue: '01PM TO 02PM'},
    {value: '02TO03', viewValue: '02PM TO 03PM'},
    {value: '03TO04', viewValue: '03PM TO 04PM'},
    {value: '04TO05', viewValue: '04PM TO 05PM'},
    {value: '05TO06', viewValue: '05PM TO 06PM'},
    {value: '06TO07', viewValue: '06PM TO 07PM'},
  ];
  trackByFn(index: number, item: any): any {
    return item.id; // or any unique property of the item
  }
}
