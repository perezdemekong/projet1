import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { Country, StatusData } from '../interfaces/country.interface';
import { ComplexResponse, IFilterParams, SimpleJsonResponse, SimpleResponse } from '@app/core/interfaces/core.interface';
import { Currency, CurrencyStatus, SimpleCurrencyOnlyResponse, SimpleCurrencyResponse } from '../interfaces/currency.interface';
import { City, cityForm, CityStatus } from '../interfaces/city.interface';

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

  async toggleStatusOfCountry(id: number, data: StatusData) {
    return await firstValueFrom(this.http.put<SimpleResponse<Country>>(
      `${environment.apiUrl}/admin/countries/${id}/status`,
      data,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }



  // Currency

  async getCurrencies(
    params?: IFilterParams
  ): Promise<ComplexResponse<Currency>> {
    return await firstValueFrom(this.http.get<ComplexResponse<Currency>>(
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

  async toggleStatusOfCurrency(id: number, data: CurrencyStatus) {
    return await firstValueFrom(this.http.put<SimpleCurrencyOnlyResponse<Currency>>(
      `${environment.apiUrl}/admin/currencies/${id}/status`,
      data,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }



  // City

  async getCities(
    params?: IFilterParams
  ): Promise<ComplexResponse<City>> {
    return await firstValueFrom(this.http.get<ComplexResponse<City>>(
      `${environment.apiUrl}/cities`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
        params: this.getQueryParams(params)
      }
    ))
  }

  async getCity(id: number): Promise<SimpleJsonResponse<City>> {
    return await firstValueFrom(this.http.get<SimpleJsonResponse<City>>(
      `${environment.apiUrl}/cities/${id}`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async postCity(data: cityForm): Promise<SimpleJsonResponse<City>> {
    return await firstValueFrom(this.http.post<SimpleJsonResponse<City>>(
      `${environment.apiUrl}/admin/cities`,
      data,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async updateCity(id: number, data: cityForm): Promise<SimpleJsonResponse<City>> {
    return await firstValueFrom(this.http.put<SimpleJsonResponse<City>>(
      `${environment.apiUrl}/admin/cities/${id}`,
      data,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async deleteCity(id: number): Promise<any> {
    return await firstValueFrom(this.http.delete<any>(
      `${environment.apiUrl}/admin/cities/${id}`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async toggleStatusOfCity(id: number, data: CityStatus) {
    return await firstValueFrom(this.http.put<SimpleJsonResponse<City>>(
      `${environment.apiUrl}/admin/cities/${id}/status`,
      data,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }
}
