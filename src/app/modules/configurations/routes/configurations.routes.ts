import { Routes } from "@angular/router";
import { TpanelComponent } from "@app/shared/theme/layouts/tpanel/tpanel.component";
import { EmployeesCreateComponent } from "../pages/employees/employees-create/employees-create.component";
import { EmployeesUpdateComponent } from "../pages/employees/employees-update/employees-update.component";
import { EmployeesComponent } from "../pages/employees/employees.component";
import { GeneralSettingComponent } from "../pages/general/general-setting/general-setting.component";
import { GeneralComponent } from "../pages/general/general.component";
import { LimitationsComponent } from "../pages/general/limitations/limitations.component";
import { RolesUpdateComponent } from "../pages/roles/roles-update/roles-update.component";
import { RolesComponent } from "../pages/roles/roles.component";

export const CONFIGURATIONS_ROUTES: Routes = [
    {
        path: '',
        component: TpanelComponent,
        children: [
            {
                path: 'employees',
                component: EmployeesComponent,
                data: {
                    title: 'Employés'
                }
            },
            {
                path: 'employees/create',
                component: EmployeesCreateComponent,
                data: {
                    title: 'Creation d\'un employé'
                }
            },
            {
                path: 'employees/:id/update',
                component: EmployeesUpdateComponent,
                data: {
                    title: 'Modification d\'un employé'
                }
            },

            {
                path: 'roles',
                component: RolesComponent,
                data: {
                    title: 'Roles'
                }
            },
            {
                path: 'roles/:id/update',
                component: RolesUpdateComponent,
                data: {
                    title: 'Modification d\'un role'
                }
            },
            {
                path: 'general',
                component: GeneralComponent,
                children: [
                    {
                        path: '',
                        component: GeneralSettingComponent,
                        data: {
                            title: 'Paramétres généraux'
                        }
                    },
                    {
                        path: 'limitations',
                        component: LimitationsComponent,
                        data: {
                            title: 'Limitations'
                        }
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/configurations/employees'
            }
        ]
    }
]