import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { ComplexResponse, Country, SimpleResponse } from '../interfaces/country.interface';
import { IFilterParams } from '@app/core/interfaces/core.interface';
import { Currency, SimpleCurrencyOnlyResponse, SimpleCurrencyResponse } from '../interfaces/currency.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) { }

  private getQueryParams(params: IFilterParams = {}): HttpParams {
    let queryParams: HttpParams = new HttpParams();

    if (params) {
      Object.keys(params).map(
        (key: string) =>
          (queryParams = queryParams.append(
            key,
            params[key as keyof IFilterParams]
          ))
      );
    }

    return queryParams;
  }

  async getCountries(
    params?: IFilterParams
  ): Promise<ComplexResponse<Country>> {
    return await firstValueFrom(this.http.get<ComplexResponse<Country>>(
      `${environment.apiUrl}/countries`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
        params: this.getQueryParams(params)
      }
    ))
  }

  async getCountry(id: number): Promise<SimpleResponse<Country>> {
    return await firstValueFrom(this.http.get<SimpleResponse<Country>>(
      `${environment.apiUrl}/countries/${id}`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async getCurrencies(
    params?: IFilterParams
  ): Promise<SimpleCurrencyResponse<Currency>> {
    return await firstValueFrom(this.http.get<SimpleCurrencyResponse<Currency>>(
      `${environment.apiUrl}/currencies`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
        params: this.getQueryParams(params)
      }
    ))
  }

  async getCurrency(id: number): Promise<SimpleCurrencyOnlyResponse<Currency>> {
    return await firstValueFrom(this.http.get<SimpleCurrencyOnlyResponse<Currency>>(
      `${environment.apiUrl}/currencies/${id}`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }
}
