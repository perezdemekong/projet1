import { Routes } from "@angular/router";
import { AuthGuard } from "@app/core/guards/auth.guard";
import { TpanelComponent } from "src/app/shared/theme/layouts/tpanel/tpanel.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";

export const DASHBOARDROUTES: Routes = [
    {
        path: '',
        component: TpanelComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: DashboardComponent,
                data: {
                    title: 'Tableau de bord'
                }
            }
        ]
    }
]