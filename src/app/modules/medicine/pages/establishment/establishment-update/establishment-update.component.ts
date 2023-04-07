import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RequestLoaderService } from '@app/core/services/request-loader.service';
import { City } from '@app/modules/location/interfaces/city.interface';
import { LocationService } from '@app/modules/location/services/location.service';
import { MedecineService } from '@app/modules/medicine/services/medecine.service';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-establishment-update',
  templateUrl: './establishment-update.component.html',
  styleUrls: ['./establishment-update.component.scss']
})
export class EstablishmentUpdateComponent implements OnInit {

  establishmentForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    type: [null, Validators.required],
    city: [null, Validators.required],
    admin_practician: [null, Validators.required],
    address: [null, Validators.required],
    postal_code: [null, Validators.required],
    description: [null, Validators.required],
    status: [false, Validators.required]
  });

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

  establishmentTypeTable = ['public', 'prive'];

  adminTypeTable = ['Mohamed Belaiouer', 'Mohamed Belaiouer1', 'Mohamed Belaiouer2'];
  admin!: string;

  cities: City[] = [];

  loading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private medecineService: MedecineService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private requestLoaderService: RequestLoaderService,
    private locationService: LocationService
    ) { }

  ngOnInit(): void {
    this.getEstablishment();
  }

  getEstablishment() {
    this.medecineService.getEstablishment(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''))
      .then((data) => {
        this.getCities();
        this.establishmentForm.get('name')?.setValue(data.data['establishment'].name);
        this.establishmentForm.get('type')?.setValue(data.data['establishment'].type);
        this.establishmentForm.get('city')?.setValue(data.data['establishment'].city);
        this.establishmentForm.get('admin_practician')?.setValue(data.data['establishment'].admin_practician);
        this.establishmentForm.get('address')?.setValue(data.data['establishment'].address);
        this.establishmentForm.get('postal_code')?.setValue(data.data['establishment'].postal_code);
        this.establishmentForm.get('description')?.setValue(data.data['establishment'].description);
        this.establishmentForm.get('status')?.setValue(data.data['establishment'].status);
        this.loading = false;
      }).catch((err) => {
        this.loading = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez reéssayer!');
      })
    ;
  }

  async getCities() {
    await this.locationService.getCities()
      .then((data) => {
        this.cities = data.data['cities'].data.sort((function(a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }));
        console.log(this.cities);
      }).catch((error) => {
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
      })
    ;
  }

  toggleStatus() {
    this.requestLoaderService.startLoading();
    this.medecineService.toggleStatusOfEstablishment(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''), { status: !this.establishmentForm.get('status')?.value })
      .then((data) => {
        this.requestLoaderService.stopLoader();
        this.establishmentForm.get('status')?.setValue(data.data['establishment'].status);
      }).catch((err) => {
        this.requestLoaderService.stopLoader();
        this.pushErrorNotif('Une érreur est survenue, veuillez reéssayer!');
      });
  }

  updateEstablishment() {
    this.requestLoaderService.startLoading();
    this.medecineService.putEstablishment(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''), this.establishmentForm.getRawValue())
      .then((data) => {
        this.requestLoaderService.stopLoader();
        this.pushSuccesNotif('Établissement modifié avec succès!');
      }).catch((err) => {
        this.requestLoaderService.stopLoader();
        this.pushErrorNotif('Une érreur est survenue, veuillez reéssayer!');
      })
    ;
  }

  pushSuccesNotif(message: string) {
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

}
