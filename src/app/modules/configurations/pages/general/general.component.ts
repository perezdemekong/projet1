import { Component, OnInit } from '@angular/core';
import { MenuTabs } from '@app/shared/components/tabs/menu-tabs/interfaces/menu-tabs.interface';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  routeParams!: string;

  menuTabs: MenuTabs[] = [
    {
      name: 'Général',
      link: '/configurations/general/settings'
    },
    {
      name: 'Limitations',
      link: '/configurations/general/limitations'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
