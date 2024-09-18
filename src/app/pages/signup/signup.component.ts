import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private router: Router) {}
  firstNameFormControl = new FormControl('');
  lastNameFormControl = new FormControl('');
  mobileNumberFormControl = new FormControl('');
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  confirmPasswordFormControl = new FormControl('', [Validators.required]);
  addressLine1FormControl = new FormControl('');
  addressLine2FormControl = new FormControl('');
  cityFormControl = new FormControl('');
  statePasswordFormControl = new FormControl('');
  countryFormControl = new FormControl('');
  postalCodeFormControl = new FormControl('');
  loginClick() {
    this.router.navigate(['/login']);
  }
}
