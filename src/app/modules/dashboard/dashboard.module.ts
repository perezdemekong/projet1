import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DASHBOARDROUTES } from './routes/dashboard.routes';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DASHBOARDROUTES)
  ]
})
export class DashboardModule { }
