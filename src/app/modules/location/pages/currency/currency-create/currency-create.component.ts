import { Component, OnInit } from '@angular/core';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';

@Component({
  selector: 'app-currency-create',
  templateUrl: './currency-create.component.html',
  styleUrls: ['./currency-create.component.scss']
})
export class CurrencyCreateComponent implements OnInit {

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Devises',
        link: '/location/currencies'
      },
      referees: [
        {
          name: "Créer une devise",
          link: ''
        }
      ]
    }
  ]

  status: boolean = false;

  positionList = ['droite', 'gauche'];

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus() {
    this.status = !this.status;
  }

}
