import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  canActivate(): boolean {
    if (!this.localStorageService.getAccessToken()) {
      this.localStorageService.removeAccessToken();
      this.router.navigateByUrl('/auth/login');
      return false;
    }

    if (this.localStorageService.getAccessToken() && !JSON.parse(this.localStorageService.getLocalStorage('user') || '{}').roles.includes('admin')) {
      this.localStorageService.removeAccessToken();
      this.router.navigateByUrl('/auth/login');
      return false;
    }

    return true;
  }
  
}
