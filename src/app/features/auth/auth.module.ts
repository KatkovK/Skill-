import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainAuthComponent } from './main-auth/main-auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/modules/input/input.module';
import { ButtonModule } from 'src/app/shared/modules/button/button.module';
import { CheckboxModule } from 'src/app/shared/modules/checkbox/checkbox.module';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    MainAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    InputModule,
    ButtonModule,
    CheckboxModule,
    
  ],
  exports: [
   
  ]
})
export class AuthModule { }
