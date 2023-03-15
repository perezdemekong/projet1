import { Routes } from "@angular/router";
import { TpanelComponent } from "@app/shared/theme/layouts/tpanel/tpanel.component";
import { DoctorsComponent } from "../pages/doctors/doctors.component";
import { AntecedentComponent } from "../pages/patients/patient-details/antecedent/antecedent.component";
import { DocumentsComponent } from "../pages/patients/patient-details/documents/documents.component";
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
                        path: 'antecedents',
                        component: AntecedentComponent,
                        data: {
                            title: "Antécédents du patient"
                        }
                    },
                    {
                        path: 'documents',
                        component: DocumentsComponent,
                        data: {
                            title: 'Documents du patient'
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