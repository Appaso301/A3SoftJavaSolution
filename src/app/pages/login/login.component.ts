import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { loginService } from './../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  constructor(private authService: loginService, private snackBar: MatSnackBar, private router: Router) { }

  onSubmit() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      const email = this.emailFormControl.value!;
      const password = this.passwordFormControl.value!;

      this.authService.login(email, password).subscribe(
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
            localStorage.setItem('email', response.email);
            this.router.navigate(['/home']).then(() => {
              window.location.reload();
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

  signUpClick() {
    this.router.navigate(['/signUp']);
  }
}
