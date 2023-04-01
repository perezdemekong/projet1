import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@app/modules/authentication/pages/interfaces/auth.interface';
import { AuthService } from '@app/modules/authentication/services/auth.service';
import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  userForm: FormGroup = this.fb.group({
    first_name: [null, Validators.required],
    last_name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    address: [null, Validators.required],
  });

  userPhotoForm: FormGroup = this.fb.group({
    photo: [null, Validators.required]
  });

  user!: User;
  photo!: string;
  userFormSubmitted: boolean = false;
  loading: boolean = false;
  loadingPhoto: boolean = false;

  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.localStorageService.getLocalStorage("user") || '');
    this.setValueOnUserForm(this.user);
    this.userForm.get('email')?.disable();
  }

  submitUserForm() {
    this.userFormSubmitted = true;

    if (this.userForm.valid) {
      this.loading = true;
      this.authService.updateProfile(this.user.id, this.userForm.getRawValue())
        .then((data) => {
          this.setValueOnUserForm(data.data.user);
          this.pushSuccessNotif('Votre profil a été mis à jour avec succés!');
          this.localStorageService.setLocalStorage(
            'user',
            JSON.stringify(data.data.user)
          );
          this.loading = false;
        }).catch((error) => {
          this.loading = false;
          this.pushErrorNotif('Une érreur est survenue, veuillez reéssayer!');
        })
      ;
    }
  }

  submitUserPhotoForm() {
    this.loadingPhoto = true;
    this.authService.updateProfileImage(this.user.id, this.userPhotoForm.getRawValue())
      .then((data) => {
        this.setValueOnUserForm(data.data.user);
        this.localStorageService.setLocalStorage(
          'user',
          JSON.stringify(data.data.user)
        );
        this.loadingPhoto = false;
        this.pushSuccessNotif('Votre photo de profil a été mis à jour avec succés!');
      }).catch((error) => {
        this.loadingPhoto = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez reéssayer!');
      })
    ;
  }

  resetUserPhotoForm() {
    this.userPhotoForm.reset();
    this.photo = this.user.profile_image || '';
  }

  setValueOnUserForm(user: User) {
    this.userForm.get('first_name')?.setValue(user.first_name);
    this.userForm.get('last_name')?.setValue(user.last_name);
    this.userForm.get('email')?.setValue(user.email);
    this.userForm.get('address')?.setValue(user.address);
    this.photo = user.profile_image || '';
  }

  onFileChange(event:any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.photo = reader.result as string;
      };
    }
    this.userPhotoForm.get('photo')?.setValue(event.target.files[0]);
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
