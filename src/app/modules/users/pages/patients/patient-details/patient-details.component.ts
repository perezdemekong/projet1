import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestLoaderService } from '@app/core/services/request-loader.service';
import { Patient } from '@app/modules/users/interfaces/patients.interface';
import { UsersService } from '@app/modules/users/services/users.service';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';
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

  patient!: Patient;

  loading: boolean = true;

  patient_name!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private usersService: UsersService,
    private requestLoaderService: RequestLoaderService
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
    this.getPatient();
  }

  getPatient() {
    this.usersService.getPatient(parseInt(this.routeParams || ''))
      .then((data) => {
        this.patient = data.data['patient'];
        this.patient_name = `${this.patient.last_name} ${this.patient.first_name}`;
        this.loading = false;
      }).catch((error) => {
        this.loading = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
      })
    ;
  }

  pushSuccessNotif(message: string) {
    this.notificationService.notificationController.next({
      isOpen: true,
      title: 'Succès',
      message,
      type: 'success'
    })
    setTimeout(() => {
      this.notificationService.notificationController.next({
        isOpen: false
      })
    }, 3000)
  }

  pushErrorNotif(message: string) {
    this.notificationService.notificationController.next({
      isOpen: true,
      title: 'Érreur',
      message,
      type: 'error'
    })
    setTimeout(() => {
      this.notificationService.notificationController.next({
        isOpen: false
      })
    }, 3000)
  }

  togglePatientStatusToggled() {
    this.requestLoaderService.startLoading();
    this.usersService.UpdatePatientStatus(this.patient.id, { status: this.patient.status})
      .then((data) => {
        this.requestLoaderService.stopLoader();
        this.patient = data.data['patient'];
        this.patient_name = `${this.patient.last_name} ${this.patient.first_name}`;
      }).catch((err) => {
        this.requestLoaderService.stopLoader();
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
      })
    ;
  }

}
