import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
  otpForm: FormGroup;
  showOTPInput: boolean = false;
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  verificationForm: any;



  constructor(private fb: FormBuilder, private router: Router) {
    this.otpForm = this.fb.group({
      otp: ['', Validators.required]
    });
  }

  sendOTP() {
    // Logic to send OTP
    // alert('OTP sent to your email');
    this.showOTPInput = true;
   
  }

  verifyOTP() {
    if (this.otpForm.valid) {
      // Simulate OTP verification (backend logic needed here)
      alert('OTP verified successfully');
      this.router.navigate(['/forgot-password']);
    }
  }

  
}
