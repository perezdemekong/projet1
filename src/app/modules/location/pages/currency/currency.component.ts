import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFilterParams } from '@app/core/interfaces/core.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';
import { Currency } from '../../interfaces/currency.interface';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  deleteCurrencyForm: boolean = false;

  searchForm: FormGroup = this.fb.group({
    search: ['', Validators.required],
  })

  filters: IFilterParams = {
    perPage: 10,
    page: 1
  }

  perPage: number = 10;
  activity: "actif" | "inactif" = "actif";

  perPageRange: number[] = [10, 20, 30, 40, 50];
  activitiesRange: string[] = ["actif", "inactif"];

  search!: string;

  currencies: Currency[] = [];

  loading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies() {
    this.locationService.getCurrencies()
      .then((currencies) => {
        this.loading = false;
        this.currencies = currencies.data.currencies;
        console.log(this.currencies);
      }).catch((err) => {
        this.loading = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!')
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

  chang() {
    console.log(this.searchForm.getRawValue());
    console.log(this.activity);
    console.log(this.perPage);
  }

  toggleDeleteCurrencyForm() {
    this.deleteCurrencyForm = !this.deleteCurrencyForm;
  }


  // handlePageSizeChange() {
  //   this.filters = Object.assign({}, {...this.filters, per_page: this.perPage})
  //   this.getCurrencies(this.filters);
  // }

  // handleStatusChange() {
  //   const NEW_VALUE = this.activity === 'actif' ? true : false;
  //   this.filters = Object.assign({}, {...this.filters, is_active: NEW_VALUE});
  //   this.getCurrencies(this.filters);
  // }

}
