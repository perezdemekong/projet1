import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComplexResponse, IFilterParams, Pagination } from '@app/core/interfaces/core.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';
import { Currency } from '../../interfaces/currency.interface';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  searchForm: FormGroup = this.fb.group({
    search: ['', Validators.required],
  })
  filters: IFilterParams = {
    perPage: 10,
    page: 1,
    name: 'dinar',
    is_active: true
  }
  pagination!: Pagination;
  
  perPageRange: number[] = [10, 20, 30, 40, 50];
  activitiesRange: string[] = ["actif", "inactif"];
  currencies: Currency[] = [];
  
  search!: string;
  perPage: number = 10;
  
  
  loading: boolean = true;
  page: number = 1;
  activity!: "actif" | "inactif";
  deleteCurrencyForm: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getCurrencies(this.filters);
  }

  getCurrencies(filter?: IFilterParams) {
    if (this.loading === false) {
      this.loading = true;
    }
    this.locationService.getCurrencies(filter)
      .then((data: ComplexResponse<Currency>) => {
        this.loading = false;
        this.currencies = data.data['currencies'].data;
        this.pagination = data.data['currencies'].pagination;
      }).catch((err) => {
        this.loading = false;
        console.log(err);
        
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

  searchByName() {
    this.filters = Object.assign({}, {...this.filters, name: this.searchForm.get('search')?.value, page: 1})
    this.getCurrencies(this.filters);
  }

  toggleDeleteCurrencyForm() {
    this.deleteCurrencyForm = !this.deleteCurrencyForm;
  }

  reset() {
    this.filters = {
      perPage: 10,
      page: 1
    }
    this.searchForm.reset();
    this.getCurrencies();
  }

  onPageChange(event: number) {
    this.filters = Object.assign(
      {},
      { ...this.filters, page: event, per_page: this.perPage }
    );
    this.getCurrencies(this.filters);
  }

  handlePageSizeChange() {
    this.filters = Object.assign({}, {...this.filters, per_page: this.perPage})
    this.getCurrencies(this.filters);
  }

  handleStatusChange() {
    const NEW_VALUE = this.activity === 'actif' ? true : false;
    this.filters = Object.assign({}, {...this.filters, is_active: NEW_VALUE, per_page: this.perPage});
    this.getCurrencies(this.filters);
  }

}
