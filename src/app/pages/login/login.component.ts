import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  constructor(private authService: LoginService, private snackBar: MatSnackBar,private router: Router) {}

  onSubmit() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      const email = this.emailFormControl.value!;
      const password = this.passwordFormControl.value!;

      this.authService.login(email, password).subscribe(
        response => {
          console.log('Login successful:', response);
          this.snackBar.open('Login successful', 'Close', {
            duration: 3000,
            panelClass: ['snackbar-success']  // Apply success class
          });
        },
        error => {
          console.error('Login failed:', error);
          this.snackBar.open('Login failed. Please try again.', 'Close', {
            duration: 3000,
            panelClass: ['snackbar-error']  // Apply error class
          });
        }
      );
    } else {
      this.snackBar.open('Form is invalid. Please check the fields.', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    }
  }
  signUpClick() {
   this.router.navigate(['/signUp']);
  }
}
