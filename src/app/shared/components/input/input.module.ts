import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { BigInputComponent } from './big-input/big-input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { BigSelectComponent } from './big-select/big-select.component';
import { BigPasswordComponent } from './big-password/big-password.component';
import { ComplexBigSelectComponent } from './big-select/complex-big-select/complex-big-select.component';
import { BigInputDatalistComponent } from './big-input/big-input-datalist/big-input-datalist.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    SelectComponent,
    CheckboxComponent,
    BigInputComponent,
    TextareaComponent,
    BigSelectComponent,
    BigPasswordComponent,
    ComplexBigSelectComponent,
    BigInputDatalistComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    SearchBarComponent,
    SelectComponent,
    BigInputComponent,
    TextareaComponent,
    BigSelectComponent,
    BigPasswordComponent,
    ComplexBigSelectComponent,
    BigInputDatalistComponent,
  ]
})
export class InputModule { }
