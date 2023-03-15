import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentComponent } from './pages/establishment/establishment.component';
import { EstablishmentCreateComponent } from './pages/establishment/establishment-create/establishment-create.component';
import { EstablishmentUpdateComponent } from './pages/establishment/establishment-update/establishment-update.component';
import { SpecialityComponent } from './pages/speciality/speciality.component';
import { SpecialityCreateComponent } from './pages/speciality/speciality-create/speciality-create.component';
import { SpecialityUpdateComponent } from './pages/speciality/speciality-update/speciality-update.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MEDICINEROUTES } from './routes/medicine.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EstablishmentComponent,
    EstablishmentCreateComponent,
    EstablishmentUpdateComponent,
    SpecialityComponent,
    SpecialityCreateComponent,
    SpecialityUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(MEDICINEROUTES),
    SharedModule
  ]
})
export class MedicineModule { }
