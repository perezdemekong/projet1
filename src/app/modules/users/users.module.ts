import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './pages/patients/patients.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { RouterModule } from '@angular/router';
import { USERSROUTES } from './routes/users.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { PatientDetailsComponent } from './pages/patients/patient-details/patient-details.component';
import { HistoricalComponent } from './pages/patients/patient-details/historical/historical.component';



@NgModule({
  declarations: [
    PatientsComponent,
    DoctorsComponent,
    PatientDetailsComponent,
    HistoricalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(USERSROUTES)
  ]
})
export class UsersModule { }
