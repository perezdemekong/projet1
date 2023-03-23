import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { ThemeModule } from './theme/theme.module';
import { PageHeadingModule } from './components/page-heading/page-heading.module';
import { ButtonModule } from './components/button/button.module';
import { InputModule } from './components/input/input.module';
import { ToggleModule } from './components/toggle/toggle.module';
import { BreadscrumbModule } from './components/breadscrumb/breadscrumb.module';
import { TabsModule } from './components/tabs/tabs.module';
import { ModalModule } from './components/modal/modal.module';
import { LoaderModule } from './components/loader/loader.module';

import { CheckUserStatusColorPipe } from './pipes/check-user-status-color.pipe';
import { CheckUserStatusSvgdfPipe } from './pipes/check-user-status-svgdf.pipe';
import { NotificationModule } from './components/notification/notification.module';



@NgModule({
  declarations: [
    CheckUserStatusColorPipe,
    CheckUserStatusSvgdfPipe
  ],
  imports: [
    CommonModule,
    ThemeModule,
    PageHeadingModule,
    ButtonModule,
    InputModule,
    ToggleModule,
    BreadscrumbModule,
    TabsModule,
    ModalModule,
    NgxPaginationModule,
    LoaderModule,
    NotificationModule,
  ],
  exports: [
    ThemeModule,
    PageHeadingModule,
    ButtonModule,
    InputModule,
    ToggleModule,
    BreadscrumbModule,
    TabsModule,
    ModalModule,
    NgxPaginationModule,
    LoaderModule,
    NotificationModule,


    CheckUserStatusColorPipe,
    CheckUserStatusSvgdfPipe,
  ]
})
export class SharedModule { }
