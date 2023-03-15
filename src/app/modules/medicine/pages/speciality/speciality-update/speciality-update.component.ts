import { Component, OnInit } from '@angular/core';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';

@Component({
  selector: 'app-speciality-update',
  templateUrl: './speciality-update.component.html',
  styleUrls: ['./speciality-update.component.scss']
})
export class SpecialityUpdateComponent implements OnInit {

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Spécialité',
        link: '/medicine/specialities'
      },
      referees: [
        {
          name: "Modifier une spécialité",
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
