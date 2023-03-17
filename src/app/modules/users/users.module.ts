import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './pages/patients/patients.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { RouterModule } from '@angular/router';
import { USERSROUTES } from './routes/users.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { PatientDetailsComponent } from './pages/patients/patient-details/patient-details.component';
import { AntecedentComponent } from './pages/patients/patient-details/antecedent/antecedent.component';
import { DocumentsComponent } from './pages/patients/patient-details/documents/documents.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    PatientsComponent,
    DoctorsComponent,
    PatientDetailsComponent,
    AntecedentComponent,
    DocumentsComponent
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
