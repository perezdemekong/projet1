import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@app/modules/authentication/pages/interfaces/auth.interface';
import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';

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
    photo: [null],
  });

  user!: User;
  photo!: string;

  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.localStorageService.getLocalStorage("user") || '');
    this.setValueOnUserForm(this.user);
    this.userForm.get('email')?.disable();
  }

  submitUserForm() {
    console.log(this.userForm.getRawValue());
  }

  setValueOnUserForm(user: User) {
    this.userForm.get('first_name')?.setValue(user.first_name);
    this.userForm.get('last_name')?.setValue(user.last_name);
    this.userForm.get('email')?.setValue(user.email);
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
    this.userForm.get('photo')?.setValue(event.target.files[0]);
    console.log(event.target.files[0]);
  }


}
