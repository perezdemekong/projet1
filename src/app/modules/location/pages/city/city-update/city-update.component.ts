import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ComplexResponse } from '@app/core/interfaces/core.interface';
import { RequestLoaderService } from '@app/core/services/request-loader.service';
import { Country } from '@app/modules/location/interfaces/country.interface';
import { LocationService } from '@app/modules/location/services/location.service';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-city-update',
  templateUrl: './city-update.component.html',
  styleUrls: ['./city-update.component.scss']
})
export class CityUpdateComponent implements OnInit {

  updateForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    country: [null, Validators.required],
    is_active: [null, Validators.required]
  });

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Villes',
        link: '/location/cities'
      },
      referees: [
        {
          name: "Modifier une ville",
          link: ''
        }
      ]
    }
  ]

  countries: Country[] = [];
  loading: boolean = true;
  updateFormSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private requestLoaderService: RequestLoaderService,
  ) { }

  ngOnInit(): void {
    this.getCity();
  }

  async getCountries() {
    await this.locationService.getCountries()
      .then((data: ComplexResponse<Country>) => {
        this.loading = false;
        this.countries = data.data['countries'].data;
      })
      .catch((error) => {
        this.loading = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
      })
    ;
  }

  getCity() {
    this.locationService.getCity(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''))
      .then((data) => {
        this.updateForm.get('name')?.setValue(data.data['city'].name);
        this.updateForm.get('is_active')?.setValue(data.data['city'].is_active);
        this.updateForm.get('country')?.setValue(data.data['city'].country);
        this.getCountries();
        this.loading = false;
      }).catch((error) => {
        this.loading = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!')
      })
    ;
  }

  updateCity() {
    this.updateFormSubmitted = true;

    if (this.updateForm.valid) {
      this.requestLoaderService.startLoading();
      this.locationService.updateCity(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''), this.updateForm.getRawValue())
        .then((data) => {
          this.pushSuccesNotif('Ville modifiée avec succès!');
          this.getCity();
          this.requestLoaderService.stopLoader();
        }).catch((error) => {
          this.requestLoaderService.stopLoader();
          this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!')
        })
      ;
    }
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

  toggleStatus() {
    this.requestLoaderService.startLoading();
    this.locationService.toggleStatusOfCity(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''), { is_active:!this.updateForm.get('is_active')?.value })
      .then((data) => {
        this.getCity();
        this.requestLoaderService.stopLoader();
        this.pushSuccesNotif('Le status de la ville a été modifié avec succès!');
      }).catch((error) => {
        this.requestLoaderService.stopLoader();
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!')
      })
    ;
  }

}
