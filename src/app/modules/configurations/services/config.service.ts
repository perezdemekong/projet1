import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComplexResponse, IFilterParams, SimpleJsonResponse } from '@app/core/interfaces/core.interface';
import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role, UpdateRoleData } from '../interfaces/roles.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

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

  async getRoles(
    params?: IFilterParams
  ): Promise<ComplexResponse<Role>> {
    return await firstValueFrom(this.http.get<ComplexResponse<Role>>(
      `${environment.apiUrl}/roles`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
        params: this.getQueryParams(params)
      }
    ))
  }

  async getRole(id: number): Promise<SimpleJsonResponse<Role>> {
    return await firstValueFrom(this.http.get<SimpleJsonResponse<Role>>(
      `${environment.apiUrl}/roles/${id}`,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async UpdateRole(id: number, data: UpdateRoleData): Promise<SimpleJsonResponse<Role>> {
    return await firstValueFrom(this.http.put<SimpleJsonResponse<Role>>(
      `${environment.apiUrl}/roles/${id}`,
      data,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }
}
