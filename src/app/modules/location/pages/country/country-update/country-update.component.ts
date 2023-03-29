import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  country!: Country;

  code!: string;
  name!: string;
  indicatif!: string[];
  status: boolean = false;

  constructor(
    private locationService: LocationService,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService
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
        this.indicatif = this.country.callingCodes
      }).catch((error) => {
        this.pushErrorNotif('Une érreur est survenue, veuillez reéssayer!');
      })
    ;
  }

  toggleStatus() {
    this.locationService.toggleStatusOfCountry(this.country.id, { is_active: !this.country.is_active, is_enabled: this.country.is_enabled })
      .then((country) => {
        this.getCountry();
        this.pushSuccessNotif('Le status du pays a été modifié avec succés!');
      }).catch((error) => {
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
