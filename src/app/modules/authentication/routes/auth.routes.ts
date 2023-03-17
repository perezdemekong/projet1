import { Routes } from "@angular/router";
import { AuthPanelComponent } from "@app/shared/theme/layouts/auth/auth.component";
import { ForgotPasswordComponent } from "../pages/forgot-password/forgot-password.component";
import { LoginComponent } from "../pages/login/login.component";

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        component: AuthPanelComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'Connexion'
                }
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
                data: {
                    title: 'Mot de passe ounlié'
                }
            },
            {
                path: '',
                redirectTo: '/auth/login',
                pathMatch: 'full'
            }
        ]
    }
]