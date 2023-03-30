import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';


import { environment } from 'src/environments/environment';
import { Data, LoginData, SuccessAuthResponse, UserData, UserDataImage } from '../pages/interfaces/auth.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  async login(data: LoginData): Promise<SuccessAuthResponse | any> {
    return await firstValueFrom( this.http.post<SuccessAuthResponse | any>(
      `${environment.apiUrl}/login`,
      data
    ))
  }

  async logOut() {
    return await firstValueFrom(this.http.post(
      `${environment.apiUrl}/logout`,
      {},
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async updateProfile(id: number, data: UserData): Promise<SuccessAuthResponse> {
    return await firstValueFrom(this.http.post<SuccessAuthResponse>(
      `${environment.apiUrl}/user/profile/${id}`,
      data,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

  async updateProfileImage(id: number, data: UserDataImage): Promise<SuccessAuthResponse> {
    return await firstValueFrom(this.http.post<SuccessAuthResponse>(
      `${environment.apiUrl}/user/profile/${id}`,
      data,
      {
        headers: { Authorization: `Bearer ${this.localStorageService.getAccessToken()}` },
      }
    ))
  }

}
