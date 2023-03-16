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

  routeParams!: string;

  menuTabs: MenuTabs[] = [
    {
      name: 'Antécédents',
      link: '/users/patients/0/antecedents'
    },
    {
      name: 'Documents',
      link: '/users/patients/0/documents'
    }
  ]

  activityToggled: boolean = false;

  birthDate: Date = new Date(1980, 0, 22);
  accountCreatedAt: Date = new Date(2022, 4, 10);

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.routeParams = params['id'];
      console.log(this.routeParams);
    });
  }

  toggleActivityToggled() {
    this.activityToggled = !this.activityToggled;
  }

}
