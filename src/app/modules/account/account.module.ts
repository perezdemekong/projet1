import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './pages/account/account.component';
import { SecurityComponent } from './pages/security/security.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { RouterModule } from '@angular/router';
import { ACCOUNT_ROUTES } from './routes/account.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';



@NgModule({
  declarations: [
    AccountComponent,
    SecurityComponent,
    PreferencesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(ACCOUNT_ROUTES),
  ]
})
export class AccountModule { }
