import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-setting',
  templateUrl: './general-setting.component.html',
  styleUrls: ['./general-setting.component.scss']
})
export class GeneralSettingComponent implements OnInit {

  appName = "Tabiblib";

  currencies: string[] = ['DZD', 'DOLLAR', 'EURO']
  countries: string[] = ['Algérie', 'Tunisie']

  constructor() { }

  ngOnInit(): void {
  }

}
