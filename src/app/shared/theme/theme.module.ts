import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TpanelComponent } from './layouts/tpanel/tpanel.component';
import { RouterModule } from '@angular/router';
import { AuthPanelComponent } from './layouts/auth/auth.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AuthPanelComponent,
    TpanelComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
  ]
})
export class ThemeModule { }
