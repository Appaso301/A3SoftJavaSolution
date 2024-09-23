import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private signUpService: SignupService, private snackBar: MatSnackBar,private router: Router) {}
  signupForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    mobileNumber : new FormControl(''),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required]),
    confirmpassword : new FormControl('', [Validators.required]),
    addressLineOne : new FormControl(''),
    addressLineTwo : new FormControl(''),
    city : new FormControl(''),
    state : new FormControl(''),
    country : new FormControl(''),
    postalCode : new FormControl('')
  })

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form is valid', this.signupForm.value);
      this.signUpService.signUp(this.signupForm.value).subscribe(
        (response: {
          email: string; error: any;
        }) => {
          if (response.error) {
            this.snackBar.open('Invalid email or password', '', {
              duration: 3000,
              panelClass: ['snackbar-error']
            });
          } else {
            this.snackBar.open('Login successful', '', {
              duration: 3000,
              panelClass: ['snackbar-success']
            });
            this.router.navigate(['/login']).then(() => {
            });
          }
        },
        (error: any) => {
          console.error('Login failed:', error);
          this.snackBar.open('Login failed. Please try again.', '', {
            duration: 3000,
            panelClass: ['snackbar-error']
          });
        }
      );
    }
    } 
  loginClick() {
    this.router.navigate(['/login']);
  }
}
