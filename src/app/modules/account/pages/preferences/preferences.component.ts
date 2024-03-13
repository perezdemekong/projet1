import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@app/modules/authentication/pages/interfaces/auth.interface';
import { AuthService } from '@app/modules/authentication/services/auth.service';
import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {

  preferencesForm: FormGroup = this.fb.group({
    language: [null, Validators.required],
    timezone: [null, Validators.required],
  });

  user!: User;

  languages: string[] = ["Français", "Arabe"];

  timeZones: string[] = ["GMT+1"];

  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.localStorageService.getLocalStorage("user") || '');
    this.setValueOnPreferencesForm(this.user);
  }

  submitPreferencesForm() {
    this.authService.updateProfile(this.user.id, this.preferencesForm.getRawValue())
      .then((data) => {
        this.setValueOnPreferencesForm(data.data.user);
        this.pushSuccessNotif('Vos préférences ont été mises à jour avec succés!');
        this.localStorageService.setLocalStorage(
          'user',
          JSON.stringify(data.data.user)
        );
      }).catch((error) => {
        this.pushErrorNotif('Une érreur est survenue, veuillez reéssayer!');
      })
    ;
  }

  setValueOnPreferencesForm(user: User) {
    this.preferencesForm.get('language')?.setValue(user.language);
    this.preferencesForm.get('timezone')?.setValue(user.timezone);
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

}
