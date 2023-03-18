import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { TableLoaderComponent } from './table-loader/table-loader.component';
import { DashboardLoaderComponent } from './dashboard-loader/dashboard-loader.component';



@NgModule({
  declarations: [
    TableLoaderComponent,
    DashboardLoaderComponent
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
  ],
  exports: [
    TableLoaderComponent,
    DashboardLoaderComponent,
    NgxSkeletonLoaderModule,
  ]
})
export class LoaderModule { }
