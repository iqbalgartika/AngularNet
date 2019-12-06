import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    // FlexLayoutModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
  ],
  declarations: [
    HeaderComponent,
  ]
})
export class LayoutModule { }
