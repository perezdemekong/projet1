import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './buttton/buttton.component';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
  ]
})
export class ButtonModule { }
