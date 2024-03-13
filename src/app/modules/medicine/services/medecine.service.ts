import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFilterParams, SimpleJsonResponse, ComplexResponse } from '@app/core/interfaces/core.interface';
import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Establishment, EstablishmentData, EstablishmentStatus } from '../interfaces/establishments.interface';
import { Speciality, SpecialityData, SpecialityStatus } from '../interfaces/speciality.interface';

@Injectable({
  providedIn: 'root'
})
export class MedecineService {

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

  async getEstablishments(
    params?: IFilterParams
  ): Promise<ComplexResponse<Establishment>> {
    return await firstValueFrom(this.http.get<ComplexResponse<Establishment>>(
      `${environment.apiUrl}/establishments`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
        params: this.getQueryParams(params)
      }
    ))
  }

  async getEstablishment(id: number): Promise<SimpleJsonResponse<Establishment>> {
    return await firstValueFrom(this.http.get<SimpleJsonResponse<Establishment>>(
      `${environment.apiUrl}/establishments/${id}`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async postEstablishment(data: EstablishmentData): Promise<SimpleJsonResponse<Establishment>> {
    return await firstValueFrom(this.http.post<SimpleJsonResponse<Establishment>>(
      `${environment.apiUrl}/establishments`,
      data,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async putEstablishment(id: number, data: EstablishmentData): Promise<SimpleJsonResponse<Establishment>> {
    return await firstValueFrom(this.http.put<SimpleJsonResponse<Establishment>>(
      `${environment.apiUrl}/establishments/${id}`,
      data,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async deleteEstablishment(id: number): Promise<any> {
    return await firstValueFrom(this.http.delete<any>(
      `${environment.apiUrl}/establishments/${id}`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async toggleStatusOfEstablishment(id: number, data: EstablishmentStatus): Promise<SimpleJsonResponse<Establishment>> {
    return await firstValueFrom(this.http.put<SimpleJsonResponse<Establishment>>(
      `${environment.apiUrl}/establishments/${id}/status`,
      data,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }



  // Speciality

  async getSpecialities(
    params?: IFilterParams
  ): Promise<ComplexResponse<Speciality>> {
    return await firstValueFrom(this.http.get<ComplexResponse<Speciality>>(
      `${environment.apiUrl}/specialities`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
        params: this.getQueryParams(params)
      }
    ))
  }

  async getSpeciality(id: number): Promise<SimpleJsonResponse<Speciality>> {
    return await firstValueFrom(this.http.get<SimpleJsonResponse<Speciality>>(
      `${environment.apiUrl}/specialities/${id}`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async postSpeciality(data: SpecialityData): Promise<SimpleJsonResponse<SpecialityData>> {
    return await firstValueFrom(this.http.post<SimpleJsonResponse<SpecialityData>>(
      `${environment.apiUrl}/specialities`,
      data,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async putSpeciality(id: number, data: SpecialityData): Promise<SimpleJsonResponse<Speciality>> {
    return await firstValueFrom(this.http.put<SimpleJsonResponse<Speciality>>(
      `${environment.apiUrl}/specialities/${id}`,
      data,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async deleteSpeciality(id: number): Promise<any> {
    return await firstValueFrom(this.http.delete<any>(
      `${environment.apiUrl}/specialities/${id}`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async toggleStatusOfSpeciality(id: number, data: SpecialityStatus): Promise<SimpleJsonResponse<Speciality>> {
    return await firstValueFrom(this.http.put<SimpleJsonResponse<Speciality>>(
      `${environment.apiUrl}/specialities/${id}/status`,
      data,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

}
