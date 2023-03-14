import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from './theme/theme.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ThemeModule
  ],
  exports: [
    ThemeModule,
  ]
})
export class SharedModule { }
