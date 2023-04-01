import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestLoaderService } from '@app/core/services/request-loader.service';
import { LocationService } from '@app/modules/location/services/location.service';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-currency-update',
  templateUrl: './currency-update.component.html',
  styleUrls: ['./currency-update.component.scss']
})
export class CurrencyUpdateComponent implements OnInit {

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Devises',
        link: '/location/currencies'
      },
      referees: [
        {
          name: "Modifier une devise",
          link: ''
        }
      ]
    }
  ]
  
  status: boolean | undefined = false;
  name!: string;
  symbol!: string;
  pays!: string;
  loading: boolean = true;

  constructor(
    private locationService: LocationService,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private requestLoaderService: RequestLoaderService
    ) { }

  ngOnInit(): void {
    this.getCurrency();
  }

  getCurrency() {
    this.locationService.getCurrency(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''))
      .then((data) => {
        this.name = data.data['currency'].name;
        this.symbol = data.data['currency'].symbol;
        this.status = data.data['currency'].is_active;
        this.loading = false;
      }).catch((error) => {
        this.loading = false;
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

  pushSuccesNotif(message: string) {
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

  toggleStatus() {
    this.requestLoaderService.startLoading();
    this.locationService.toggleStatusOfCurrency(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''), { is_active: !this.status })
      .then((data) => {
        this.pushSuccesNotif('ce status a été modifié avec succès!');
        this.getCurrency();
        this.requestLoaderService.stopLoader();
      }).catch((error) => {
        this.requestLoaderService.stopLoader();
        this.pushErrorNotif('Une érreur est survenue, veuillez reéssayer!');
      })
    ;
  }

}
