import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestLoaderService } from '@app/core/services/request-loader.service';
import { Doctor } from '@app/modules/users/interfaces/doctors.interface';
import { UsersService } from '@app/modules/users/services/users.service';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';
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

  doctor!: Doctor;

  routeParams!: string | null;

  validateDoctorAccountForm: boolean = false;

  menuTabs!: MenuTabs[];

  activityToggled: boolean = false;
  loading: boolean = true;

  birthDate: Date = new Date(1980, 0, 22);
  accountCreatedAt: Date = new Date(2022, 4, 10);

  name!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private usersService: UsersService,
    private requestLoaderService: RequestLoaderService,
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
    this.getDoctor();
  }

  getDoctor() {
    this.usersService.getDoctor(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''))
      .then((data) => {
        this.loading = false;
        this.doctor = data.data['practician'];
        this.name = `${this.doctor.first_name} ${this.doctor.last_name}`;
      }).catch((err) => {
        this.loading = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
      })
    ;
  }

  updateStatus() {
    this.requestLoaderService.startLoading();

    this.usersService.activateDoctorAccount(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''))
      .then((data) => {
        this.doctor = data.data['practician'];
        this.pushSuccessNotif('ce compte a été modifié avec succès!')
        this.requestLoaderService.stopLoader();
      }).catch((err) => {
        this.requestLoaderService.stopLoader();
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

  toggleValidateDoctorAccountForm() {
    this.validateDoctorAccountForm = !this.validateDoctorAccountForm;
  }

  updateValidateAccount() {
    this.validateDoctorAccountForm = !this.validateDoctorAccountForm;

    this.requestLoaderService.startLoading();

    this.usersService.validateDoctorAccount(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''))
      .then((data) => {
        this.doctor = data.data['practician'];
        this.pushSuccessNotif('ce compte a été modifié avec succès!')
        this.requestLoaderService.stopLoader();
      }).catch((err) => {
        this.requestLoaderService.stopLoader();
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
      })
    ;
  }

}
