import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Add your login logic here
    }
  }

  // Getter for easy access to form fields
  get f() { 
    return this.loginForm.controls; 
  }
}
