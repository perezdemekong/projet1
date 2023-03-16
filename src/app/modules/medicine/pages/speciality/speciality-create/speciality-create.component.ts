import { Component, OnInit } from '@angular/core';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';

@Component({
  selector: 'app-speciality-create',
  templateUrl: './speciality-create.component.html',
  styleUrls: ['./speciality-create.component.scss']
})
export class SpecialityCreateComponent implements OnInit {

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Spécialité',
        link: '/medicine/specialities'
      },
      referees: [
        {
          name: "Créer une spécialité",
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
    this.status = !this.status
  }

}
