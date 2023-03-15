import { Component, OnInit } from '@angular/core';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';

@Component({
  selector: 'app-establishment-create',
  templateUrl: './establishment-create.component.html',
  styleUrls: ['./establishment-create.component.scss']
})
export class EstablishmentCreateComponent implements OnInit {

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Établissements',
        link: '/medicine/establishments'
      },
      referees: [
        {
          name: "Créer un établissement",
          link: ''
        }
      ]
    }
  ]

  establishmentTypeTable = ['hopital publique', 'clinique privée'];
  establishmentType!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
