import { Component, OnInit } from '@angular/core';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';

@Component({
  selector: 'app-establishment-update',
  templateUrl: './establishment-update.component.html',
  styleUrls: ['./establishment-update.component.scss']
})
export class EstablishmentUpdateComponent implements OnInit {

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Établissements',
        link: '/medicine/establishments'
      },
      referees: [
        {
          name: "Modifier un établissement",
          link: ''
        }
      ]
    }
  ]

  establishmentTypeTable = ['hopital publique', 'clinique privée'];
  establishmentType!: string;

  adminTypeTable = ['Mohamed Belaiouer', 'Mohamed Belaiouer'];
  admin!: string;

  villeTypeTable = ['Alger', 'Blida'];
  ville!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
