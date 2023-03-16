import { Component, OnInit } from '@angular/core';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.scss']
})
export class CityCreateComponent implements OnInit {

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Villes',
        link: '/location/cities'
      },
      referees: [
        {
          name: "Créer une ville",
          link: ''
        }
      ]
    }
  ]

  status: boolean = false;

  countryList = ['algerie', 'Tunisie'];

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus() {
    this.status = !this.status;
  }

}
