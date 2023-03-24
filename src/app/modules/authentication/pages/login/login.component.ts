import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Roles } from '@app/core/enums/roles';
import { StopLoadingService } from '@app/core/services/stop-loading.service';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { ErrorAuthResponse, SuccessAuthResponse } from '../interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required]
  })

  passwordToggled: boolean = false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    
  }

  togglePasswordToggled(): void {
    this.passwordToggled = !this.passwordToggled;
  }

  login() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.login(this.loginForm.getRawValue())
        .then((data: SuccessAuthResponse) => {
          this.checkUserStatus(data);
        })
        .catch((err) => {
          this.loading = false;
          this.pushErrorNotif('Adresse e-mail ou mot de passe invalide!');
        })
      ;
      
    }
  }

  checkUserStatus(data: SuccessAuthResponse) {
    if (data.data.user.roles.includes(Roles.Admin)) {
      this.populateLocalStorage(data);
      this.router.navigateByUrl('/dashboard');
      this.pushSuccesNotif();
    }else {
      this.pushErrorNotif('Adresse e-mail ou mot de passe invalide!');
    }
    this.loading = false;
  }

  pushSuccesNotif() {
    this.notificationService.notificationController.next({
      isOpen: true,
      title: 'Succès',
      message: 'Connexion effectuée avec succés!',
      type: 'success'
    })
    setTimeout(() => {
      this.notificationService.notificationController.next({
        isOpen: false
      })
    }, 3000)
  }

  pushErrorNotif(message: string) {
    this.notificationService.notificationController.next({
      isOpen: true,
      title: 'Érreur',
      message,
      type: 'error'
    })
    setTimeout(() => {
      this.notificationService.notificationController.next({
        isOpen: false
      })
    }, 3000)
  }

  populateLocalStorage(data: SuccessAuthResponse) {
    this.localStorageService.setAccessToken(
      data.data.token,
    );
    this.localStorageService.setLocalStorage(
      'user',
      JSON.stringify(data.data.user)
    );
    this.localStorageService.setLocalStorage(
      'roles',
      JSON.stringify(data.data.user.roles)
    );
  }

}
