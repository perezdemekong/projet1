import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadscrumbComponent } from './breadscrumb/breadscrumb.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BreadscrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BreadscrumbComponent,
  ]
})
export class BreadscrumbModule { }
