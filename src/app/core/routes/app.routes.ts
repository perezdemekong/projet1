import { Routes } from "@angular/router";

export const ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => 
            import('@modules/dashboard/dashboard.module').then(
                m => m.DashboardModule
            )
    }
]