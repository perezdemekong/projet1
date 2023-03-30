import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFilterParams, ComplexResponse, SimpleJsonResponse } from '@app/core/interfaces/core.interface';
import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient, UpdatePatientData } from '../interfaces/patients.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

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

  async getPatients(
    params?: IFilterParams
  ): Promise<ComplexResponse<Patient>> {
    return await firstValueFrom(this.http.get<ComplexResponse<Patient>>(
      `${environment.apiUrl}/patients`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
        params: this.getQueryParams(params)
      }
    ))
  }

  async getPatient(id: number): Promise<SimpleJsonResponse<Patient>> {
    return await firstValueFrom(this.http.get<SimpleJsonResponse<Patient>>(
      `${environment.apiUrl}/patients/${id}`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async UpdatePatientStatus(id: number, data: UpdatePatientData): Promise<SimpleJsonResponse<Patient>> {
    return await firstValueFrom(this.http.put<SimpleJsonResponse<Patient>>(
      `${environment.apiUrl}/patients/${id}`,
      data,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }
}
