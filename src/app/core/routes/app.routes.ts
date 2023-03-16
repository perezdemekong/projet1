import { Routes } from "@angular/router";

export const ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => 
            import('@modules/dashboard/dashboard.module').then(
                m => m.DashboardModule
            )
    },
    {
        path: 'users',
        loadChildren: () => 
            import('@modules/users/users.module').then(
                m => m.UsersModule
            )
    },
    {
        path: 'medicine',
        loadChildren: () =>
            import('@modules/medicine/medicine.module').then(
                m => m.MedicineModule
            )
    },
    {
        path: 'location',
        loadChildren: () => 
            import('@modules/location/location.module').then(
                m => m.LocationModule
            )
    },
    {
        path: 'configurations',
        loadChildren: () => 
            import('@modules/configurations/configurations.module').then(
                m => m.ConfigurationsModule
            )
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
]