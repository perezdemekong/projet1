import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { RequestLoaderService } from '@app/core/services/request-loader.service';
import { AuthService } from '@app/modules/authentication/services/auth.service';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  passwordForm: FormGroup = this.fb.group({
    password: [null, Validators.required],
    new_password: [null, Validators.required],
    new_password_confirm: [null, Validators.required],
  });

  oldPasswordToggled: boolean = false;
  newPasswordToggled: boolean = false;
  newPasswordConfirmToggled: boolean = false;
  passwordFormSubmitted: boolean = false;
  doesNotMatch: boolean = false

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private authService: AuthService,
    private requestLoaderService: RequestLoaderService,
  ) { }

  ngOnInit(): void {}

  checkPassword(){
    if (this.passwordForm.get('new_password')?.value !== this.passwordForm.get('new_password_confirm')?.value) {
      this.doesNotMatch = true;
    }else {
      this.doesNotMatch = false;
    }
  }

  changePassword() {
    this.passwordFormSubmitted = true;

    if (this.passwordForm.valid) {
      this.requestLoaderService.startLoading();
      const data = {
        password: this.passwordForm.get('password')?.value,
        new_password: this.passwordForm.get('new_password')?.value,
      }
  
      this.authService.updatePassword(data)
        .then((data) => {
          this.requestLoaderService.stopLoader();
          this.pushSuccessNotif('Votre mot de passe a été modifié avec succès!')
  
        }).catch((err) => {
          this.requestLoaderService.stopLoader()
          this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!')
        })
      ;
    }
  }

  pushSuccessNotif(message: string) {
    this.notificationService.notificationController.next({
      isOpen: true,
      title: 'Succès',
      message,
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

  toggleOldPassword() {
    this.oldPasswordToggled = !this.oldPasswordToggled;
  }

  toggleNewPassword() {
    this.newPasswordToggled = !this.newPasswordToggled;
  }

  toggleNewPasswordConfirmToggled() {
    this.newPasswordConfirmToggled = !this.newPasswordConfirmToggled;
  }

}
