import { Component, OnInit } from '@angular/core';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';

@Component({
  selector: 'app-roles-update',
  templateUrl: './roles-update.component.html',
  styleUrls: ['./roles-update.component.scss']
})
export class RolesUpdateComponent implements OnInit {

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Rôles',
        link: '/configurations/roles'
      },
      referees: [
        {
          name: "Modifier un role",
          link: ''
        }
      ]
    }
  ]

  status: boolean = false;

  search!: string;

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus() {
    this.status = !this.status;
  }

}
