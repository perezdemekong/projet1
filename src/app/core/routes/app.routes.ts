import { Routes } from "@angular/router";
import { NotFoundComponent } from "@app/shared/theme/layouts/not-found/not-found.component";
import { AdminGuard } from "../guards/admin.guard";
import { AuthGuard } from "../guards/auth.guard";

export const ROUTES: Routes = [
    {
        path: 'dashboard',
        canActivate: [AuthGuard, AdminGuard],
        loadChildren: () => 
            import('@modules/dashboard/dashboard.module').then(
                m => m.DashboardModule
            )
    },
    {
        path: 'users',
        canActivate: [AuthGuard, AdminGuard],
        loadChildren: () => 
            import('@modules/users/users.module').then(
                m => m.UsersModule
            )
    },
    {
        path: 'medicine',
        canActivate: [AuthGuard, AdminGuard],
        loadChildren: () =>
            import('@modules/medicine/medicine.module').then(
                m => m.MedicineModule
            )
    },
    {
        path: 'location',
        canActivate: [AuthGuard, AdminGuard],
        loadChildren: () => 
            import('@modules/location/location.module').then(
                m => m.LocationModule
            )
    },
    {
        path: 'configurations',
        canActivate: [AuthGuard, AdminGuard],
        loadChildren: () => 
            import('@modules/configurations/configurations.module').then(
                m => m.ConfigurationsModule
            )
    },
    {
        path: 'account',
        canActivate: [AuthGuard, AdminGuard],
        loadChildren: () => 
            import('@modules/account/account.module').then(
                m => m.AccountModule
            )
    },
    {
        path: 'auth',
        loadChildren: () => 
            import('@modules/authentication/authentication.module').then(
                m => m.AuthenticationModule
            )
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent,
        data: {
            title: 'Page introuvable'
        }
    }
]