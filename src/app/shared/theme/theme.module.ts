import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { TpanelComponent } from './layouts/tpanel/tpanel.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AuthComponent,
    TpanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ThemeModule { }
