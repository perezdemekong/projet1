import { Component, OnInit } from '@angular/core';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';

@Component({
  selector: 'app-country-update',
  templateUrl: './country-update.component.html',
  styleUrls: ['./country-update.component.scss']
})
export class CountryUpdateComponent implements OnInit {

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Pays',
        link: '/location/countries'
      },
      referees: [
        {
          name: "Modifier un pays",
          link: ''
        }
      ]
    }
  ]

  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus() {
    this.status = !this.status;
  }

}
