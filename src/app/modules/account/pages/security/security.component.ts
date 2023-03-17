import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  oldPassword!: string;
  newPassword!: string;
  newPasswordConfirm!: string;

  oldPasswordToggled: boolean = false;
  newPasswordToggled: boolean = false;
  newPasswordConfirmToggled: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
