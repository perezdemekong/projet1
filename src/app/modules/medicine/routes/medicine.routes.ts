import { Routes } from "@angular/router";
import { TpanelComponent } from "@app/shared/theme/layouts/tpanel/tpanel.component";
import { EstablishmentCreateComponent } from "../pages/establishment/establishment-create/establishment-create.component";
import { EstablishmentUpdateComponent } from "../pages/establishment/establishment-update/establishment-update.component";
import { EstablishmentComponent } from "../pages/establishment/establishment.component";
import { SpecialityCreateComponent } from "../pages/speciality/speciality-create/speciality-create.component";
import { SpecialityUpdateComponent } from "../pages/speciality/speciality-update/speciality-update.component";
import { SpecialityComponent } from "../pages/speciality/speciality.component";

export const MEDICINEROUTES: Routes = [
    {
        path: '',
        component: TpanelComponent,
        children: [
            {
                path: 'establishments',
                component: EstablishmentComponent,
                data: {
                    title: 'Établissements'
                }
            },
            {
                path: 'establishments/create',
                component: EstablishmentCreateComponent,
                data: {
                    title: 'Création d\'un établissement'
                }
            },
            {
                path: 'establishments/:id/update',
                component: EstablishmentUpdateComponent,
                data: {
                    title: 'Modification d\'un établissement'
                }
            },
            {
                path: 'specialities',
                component: SpecialityComponent,
                data: {
                    title: 'Spécialité'
                }
            },
            {
                path: 'specialities/create',
                component: SpecialityCreateComponent,
                data: {
                    title: 'Création d\'une spécialité'
                }
            },
            {
                path: 'specialities/:id/update',
                component: SpecialityUpdateComponent,
                data: {
                    title: 'Modification d\'une spécialité'
                }
            },
            {
                path: '',
                redirectTo: '/medicine/establishments',
                pathMatch: 'full'
            }
        ]
    }
]