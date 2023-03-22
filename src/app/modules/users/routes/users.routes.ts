import { Routes } from "@angular/router";

import { TpanelComponent } from "@app/shared/theme/layouts/tpanel/tpanel.component";
import { DoctorsDetailComponent } from "../pages/doctors/doctors-detail/doctors-detail.component";
import { HistoricalComponent as DoctorHistoricalComponent } from "../pages/doctors/doctors-detail/historical/historical.component";
import { PlaceOfConsultationComponent } from "../pages/doctors/doctors-detail/place-of-consultation/place-of-consultation.component";
import { DoctorsComponent } from "../pages/doctors/doctors.component";
import { HistoricalComponent as PatientHistoricalComponent } from "../pages/patients/patient-details/historical/historical.component";
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
                        component: PatientHistoricalComponent,
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
                path: 'doctors/:id',
                component: DoctorsDetailComponent,
                data: {
                    title: 'Détails du médecin'
                },
                children: [
                    {
                        path: 'place-of-consultation',
                        component: PlaceOfConsultationComponent,
                        data: {
                            title: 'Lieux de consultation'
                        }
                    },
                    {
                        path: 'historical',
                        component: DoctorHistoricalComponent,
                        data: {
                            title: 'Historique des RDV'
                        }
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'patients',
                pathMatch: 'full'
            }
        ] 
    }
]