import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setAccessToken(accessToken: string): void {
    localStorage.setItem('accessToken', accessToken);
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  public removeAccessToken(): void {
    localStorage.clear();
  }

  public setLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public getLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  payload(token: string): any {
    const tokenPayload = token.split('.')[1];
    return JSON.parse(atob(tokenPayload));
  }

}
