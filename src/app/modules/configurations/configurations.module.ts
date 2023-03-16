import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeesCreateComponent } from './pages/employees/employees-create/employees-create.component';
import { EmployeesUpdateComponent } from './pages/employees/employees-update/employees-update.component';
import { RolesComponent } from './pages/roles/roles.component';
import { RolesUpdateComponent } from './pages/roles/roles-update/roles-update.component';
import { GeneralComponent } from './pages/general/general.component';
import { GeneralSettingComponent } from './pages/general/general-setting/general-setting.component';
import { LimitationsComponent } from './pages/general/limitations/limitations.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CONFIGURATIONS_ROUTES } from './routes/configurations.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesCreateComponent,
    EmployeesUpdateComponent,
    RolesComponent,
    RolesUpdateComponent,
    GeneralComponent,
    GeneralSettingComponent,
    LimitationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(CONFIGURATIONS_ROUTES)
  ]
})
export class ConfigurationsModule { }
