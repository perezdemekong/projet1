import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { TableLoaderComponent } from './table-loader/table-loader.component';
import { DashboardLoaderComponent } from './dashboard-loader/dashboard-loader.component';
import { RequestLoaderComponent } from './request-loader/request-loader.component';



@NgModule({
  declarations: [
    TableLoaderComponent,
    DashboardLoaderComponent,
    RequestLoaderComponent
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
  ],
  exports: [
    TableLoaderComponent,
    DashboardLoaderComponent,
    RequestLoaderComponent,
    NgxSkeletonLoaderModule,
  ]
})
export class LoaderModule { }
