import { Routes } from "@angular/router";

import { TpanelComponent } from "@app/shared/theme/layouts/tpanel/tpanel.component";
import { DoctorsComponent } from "../pages/doctors/doctors.component";
import { HistoricalComponent } from "../pages/patients/patient-details/historical/historical.component";
import { PatientDetailsComponent } from "../pages/patients/patient-details/patient-details.component";
import { PatientsComponent } from "../pages/patients/patients.component";

export const USERSROUTES: Routes = [
    {
        path: '',
        component: TpanelComponent,
        children: [
            {
                path: 'patients',
                component: PatientsComponent,
                data: {
                    title: 'Patients'
                },
            },
            {
                path: 'patients/:id',
                component: PatientDetailsComponent,
                data: {
                    title: 'Détails du patient'
                },
                children: [
                    {
                        path: 'historical',
                        component: HistoricalComponent,
                        data: {
                            title: "Historiques des RDV"
                        }
                    },
                    {
                        path: '',
                        redirectTo: '/users/patients',
                        pathMatch: 'full'
                    }
                ]
            },
            {
                path: 'doctors',
                component: DoctorsComponent,
                data: {
                    title: 'Praticiens'
                }
            },
            {
                path: '',
                redirectTo: 'patients',
                pathMatch: 'full'
            }
        ] 
    }
]