import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth/auth.service';
import { UserService } from './core/user/user.service';
import { TokenService } from './core/token/token.service';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [AuthService,UserService,TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
