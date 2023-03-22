import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';
import { MenuTabs } from '@app/shared/components/tabs/menu-tabs/interfaces/menu-tabs.interface';

@Component({
  selector: 'app-doctors-detail',
  templateUrl: './doctors-detail.component.html',
  styleUrls: ['./doctors-detail.component.scss']
})
export class DoctorsDetailComponent implements OnInit {

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Doctor',
        link: '/users/doctors'
      },
      referees: [
        {
          name: "Informations du médecin",
          link: ''
        }
      ]
    }
  ]

  routeParams!: string | null;

  validateDoctorAccountForm: boolean = false;

  menuTabs!: MenuTabs[];

  activityToggled: boolean = false;

  birthDate: Date = new Date(1980, 0, 22);
  accountCreatedAt: Date = new Date(2022, 4, 10);

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.routeParams = this.activatedRoute.snapshot.paramMap.get('id');
    this.menuTabs = [
      {
        name: 'Lieux de consultation',
        link: `/users/doctors/${this.routeParams}/place-of-consultation`
      },
      {
        name: 'Historiques des rendez-vous',
        link: `/users/doctors/${this.routeParams}/historical`
      }
    ];
  }

  toggleActivityToggled() {
    this.activityToggled = !this.activityToggled;
  }

  toggleValidateDoctorAccountForm() {
    this.validateDoctorAccountForm = !this.validateDoctorAccountForm;
  }

}
