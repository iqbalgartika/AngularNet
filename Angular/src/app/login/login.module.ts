import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
// import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    // FlexLayoutModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
