import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './pages/country/country.component';
import { CountryCreateComponent } from './pages/country/country-create/country-create.component';
import { CountryUpdateComponent } from './pages/country/country-update/country-update.component';
import { CityComponent } from './pages/city/city.component';
import { CityCreateComponent } from './pages/city/city-create/city-create.component';
import { CityUpdateComponent } from './pages/city/city-update/city-update.component';
import { CurrencyComponent } from './pages/currency/currency.component';
import { CurrencyCreateComponent } from './pages/currency/currency-create/currency-create.component';
import { CurrencyUpdateComponent } from './pages/currency/currency-update/currency-update.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { LOCATIONROUTES } from './routes/location.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CountryComponent,
    CountryCreateComponent,
    CountryUpdateComponent,
    CityComponent,
    CityCreateComponent,
    CityUpdateComponent,
    CurrencyComponent,
    CurrencyCreateComponent,
    CurrencyUpdateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(LOCATIONROUTES),
  ]
})
export class LocationModule { }
