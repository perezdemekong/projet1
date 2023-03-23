import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorAuthResponse, LoginData, SuccessAuthResponse } from '../pages/interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  async login(data: LoginData): Promise<SuccessAuthResponse | any> {
    return await firstValueFrom( this.http.post<SuccessAuthResponse | any>(
      `${environment.apiUrl}/login`,
      data
    ))
  }

}
