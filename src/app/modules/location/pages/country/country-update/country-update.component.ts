import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestLoaderService } from '@app/core/services/request-loader.service';


import { Country } from '@app/modules/location/interfaces/country.interface';
import { LocationService } from '@app/modules/location/services/location.service';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-country-update',
  templateUrl: './country-update.component.html',
  styleUrls: ['./country-update.component.scss']
})
export class CountryUpdateComponent implements OnInit {

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Pays',
        link: '/location/countries'
      },
      referees: [
        {
          name: "Modifier un pays",
          link: ''
        }
      ]
    }
  ]
  indicatif!: string[];

  country!: Country;

  code!: string;
  name!: string;
  status: boolean = false;
  loading: boolean = true;

  constructor(
    private locationService: LocationService,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private requestLoaderService: RequestLoaderService,
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry() {
    this.locationService.getCountry(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''))
      .then((country) => {
        this.country = country.data[0];
        this.code = this.country.cca3;
        this.name = this.country.name;
        this.status = this.country.is_active;
        this.indicatif = this.country.callingCodes;
        this.loading = false;
      }).catch((error) => {
        this.loading = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez reéssayer!');
      })
    ;
  }

  toggleStatus() {
    this.requestLoaderService.startLoading();
    this.locationService.toggleStatusOfCountry(this.country.id, { is_active: !this.country.is_active, is_enabled: this.country.is_enabled })
      .then((country) => {
        this.getCountry();
        this.pushSuccessNotif('Le status du pays a été modifié avec succés!');
        this.requestLoaderService.stopLoader();
      }).catch((error) => {
        this.requestLoaderService.stopLoader();
        this.pushErrorNotif('Une érreur est survenue, veuillez reéssayer!');
      })
    ;
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

  pushSuccessNotif(message: string) {
    this.notificationService.notificationController.next({
      isOpen: true,
      title: 'Succés',
      message,
      type: 'success'
    })
    setTimeout(() => {
      this.notificationService.notificationController.next({
        isOpen: false
      })
    }, 3000)
  }

}
