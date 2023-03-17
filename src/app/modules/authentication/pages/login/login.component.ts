import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  passwordToggled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglePasswordToggled(): void {
    this.passwordToggled = !this.passwordToggled;
  }

}
