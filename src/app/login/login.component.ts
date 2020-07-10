import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  labels = {
    agency:"Agency",
    account:"Account number",
    password:"Password"
  }

  authForm: FormGroup;


  constructor(
    private authService: AuthService, 
    private formBuilder: FormBuilder,  
    private router: Router) { }
  
  ngOnInit(): void {

      this.authForm = this.formBuilder.group({
        agency: ['', Validators.required],
        account: ['', Validators.required],
        password: ['', Validators.required]
    });
    
  }
  login(){
    const agency = this.authForm.get("agency").value;
    const account = this.authForm.get("account").value;
    const password = this.authForm.get("password").value;
    
    this.authService.authenticate(agency, account,password)
    .subscribe(
        () => this.router.navigate(['user', account]),
        error => {
            console.log(error);
            this.authForm.reset();
            alert('Erro ao realizar o login');
        }
    );
  }

}
