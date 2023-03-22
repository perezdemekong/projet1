import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';
import { MenuTabs } from '@app/shared/components/tabs/menu-tabs/interfaces/menu-tabs.interface';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Patient',
        link: '/users/patients'
      },
      referees: [
        {
          name: "Informations du patient",
          link: ''
        }
      ]
    }
  ]

  routeParams!: string | null;
  route!: string;

  menuTabs!: MenuTabs[];

  activityToggled: boolean = false;

  birthDate: Date = new Date(1980, 0, 22);
  accountCreatedAt: Date = new Date(2022, 4, 10);

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.routeParams = this.activatedRoute.snapshot.paramMap.get('id');
    this.route = `/users/patients/${this.routeParams}/historical`;
    this.menuTabs = [
      {
        name: 'Historiques des rendez-vous',
        link: this.route
      },
    ];
    console.log(this.route);
  }

  toggleActivityToggled() {
    this.activityToggled = !this.activityToggled;
  }

}
