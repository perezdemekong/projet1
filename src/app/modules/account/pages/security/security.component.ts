import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  passwordForm: FormGroup = this.fb.group({
    old_password: [null, Validators.required],
    new_password: [null, Validators.required],
    new_password_confirm: [null, Validators.required],
  });

  oldPasswordToggled: boolean = false;
  newPasswordToggled: boolean = false;
  newPasswordConfirmToggled: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  changePassword() {
    if (this.passwordForm.get('new_password') === this.passwordForm.get('new_password_confirm')) {
      console.log('ok!!!');
    }
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
