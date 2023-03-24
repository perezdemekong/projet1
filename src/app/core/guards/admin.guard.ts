import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';
import { Observable } from 'rxjs';
import { Roles } from '../enums/roles';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  canActivate(): boolean {
    const USER_ROLES = this.localStorageService.getLocalStorage('roles');
    if (!JSON.parse(USER_ROLES || '').includes(Roles.Admin)) {

      this.router.navigateByUrl('/auth/login');
      
      return false
    }

    return true;
  }
  
}
