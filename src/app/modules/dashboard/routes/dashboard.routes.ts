import { Routes } from "@angular/router";
import { TpanelComponent } from "src/app/shared/theme/layouts/tpanel/tpanel.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";

export const DASHBOARDROUTES: Routes = [
    {
        path: '',
        component: TpanelComponent,
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