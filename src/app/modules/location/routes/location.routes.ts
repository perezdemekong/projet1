import { Routes } from "@angular/router";
import { TpanelComponent } from "@app/shared/theme/layouts/tpanel/tpanel.component";
import { CityCreateComponent } from "../pages/city/city-create/city-create.component";
import { CityUpdateComponent } from "../pages/city/city-update/city-update.component";
import { CityComponent } from "../pages/city/city.component";
import { CountryCreateComponent } from "../pages/country/country-create/country-create.component";
import { CountryUpdateComponent } from "../pages/country/country-update/country-update.component";
import { CountryComponent } from "../pages/country/country.component";
import { CurrencyCreateComponent } from "../pages/currency/currency-create/currency-create.component";
import { CurrencyUpdateComponent } from "../pages/currency/currency-update/currency-update.component";
import { CurrencyComponent } from "../pages/currency/currency.component";

export const LOCATIONROUTES: Routes = [
    {
        path: '',
        component: TpanelComponent,
        children: [
            {
                path: 'countries',
                component: CountryComponent,
                data: {
                    title: 'Pays'
                }
            },
            {
                path: 'countries/create',
                component: CountryCreateComponent,
                data: {
                    title: 'Création d\'un pays'
                }
            },
            {
                path: 'countries/:id/update',
                component: CountryUpdateComponent,
                data: {
                    title: 'Modification d\'un pays'
                }
            },

            {
                path: 'cities',
                component: CityComponent,
                data: {
                    title: 'Villes'
                }
            },
            {
                path: 'cities/create',
                component: CityCreateComponent,
                data: {
                    title: 'Création d\'une ville'
                }
            },
            {
                path: 'cities/:id/update',
                component: CityUpdateComponent,
                data: {
                    title: 'Modification d\'une ville'
                }
            },
            {
                path: 'currencies',
                component: CurrencyComponent,
                data: {
                    title: 'Devises'
                }
            },
            {
                path: 'currencies/create',
                component: CurrencyCreateComponent,
                data: {
                    title: 'Création d\'une devise'
                }
            },
            {
                path: 'currencies/:id/update',
                component: CurrencyUpdateComponent,
                data: {
                    title: 'Modification d\'une devise'
                }
            },
            {
                path: '',
                redirectTo: 'location/countries',
                pathMatch: 'full'
            }
        ]
    }
]