import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './pages/patients/patients.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { RouterModule } from '@angular/router';
import { USERSROUTES } from './routes/users.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { PatientDetailsComponent } from './pages/patients/patient-details/patient-details.component';
import { HistoricalComponent as PatientHistorical } from './pages/patients/patient-details/historical/historical.component';
import { DoctorsDetailComponent } from './pages/doctors/doctors-detail/doctors-detail.component';
import { PlaceOfConsultationComponent } from './pages/doctors/doctors-detail/place-of-consultation/place-of-consultation.component';
import { HistoricalComponent as DoctorHistorical } from './pages/doctors/doctors-detail/historical/historical.component';



@NgModule({
  declarations: [
    PatientsComponent,
    DoctorsComponent,
    PatientDetailsComponent,
    PatientHistorical,
    DoctorHistorical,
    DoctorsDetailComponent,
    PlaceOfConsultationComponent
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
