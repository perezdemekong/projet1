import { Routes } from "@angular/router";
import { TpanelComponent } from "@app/shared/theme/layouts/tpanel/tpanel.component";
import { AccountComponent } from "../pages/account/account.component";
import { PreferencesComponent } from "../pages/preferences/preferences.component";
import { SecurityComponent } from "../pages/security/security.component";

export const ACCOUNT_ROUTES: Routes = [
    {
        path: '',
        component: TpanelComponent,
        children: [
            {
                path: 'me',
                component: AccountComponent,
                data: {
                    title: 'Mon compte'
                }
            },
            {
                path: 'security',
                component: SecurityComponent,
                data: {
                    title: 'Connexion et sécurité',
                }
            },
            {
                path: 'preferences',
                component: PreferencesComponent,
                data: {
                    title: 'Preferences',
                }
            },
            {
                path: '',
                redirectTo: '/account/me',
                pathMatch: 'full'
            }
        ]
    }
]