import { Component, OnInit } from '@angular/core';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';

@Component({
  selector: 'app-currency-update',
  templateUrl: './currency-update.component.html',
  styleUrls: ['./currency-update.component.scss']
})
export class CurrencyUpdateComponent implements OnInit {

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Devises',
        link: '/location/currencies'
      },
      referees: [
        {
          name: "Modifier une devise",
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
