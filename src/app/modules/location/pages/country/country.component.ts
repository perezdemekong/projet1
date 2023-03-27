import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComplexResponse, IFilterParams, Pagination } from '@app/core/interfaces/core.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';
import { Country } from '../../interfaces/country.interface';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  deleteCountryForm: boolean = false;

  searchForm: FormGroup = this.fb.group({
    search: ['', Validators.required],
  })

  countries: Country[] = [];
  pagination!: Pagination;

  perPage: number = 10;
  activity!: "actif" | "inactif";

  perPageRange: number[] = [10, 20, 30, 40, 50];
  activitiesRange = ["actif", "inactif"];

  search!: string;

  loading: boolean = true;

  filters: IFilterParams = {
    perPage: 10,
    page: 1
  }

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getContries();
  }

  getContries(params?: IFilterParams) {
    if (this.loading === false) {
      this.loading = true;
    }
    this.locationService.getCountries(params)
      .then((data: ComplexResponse<Country>) => {
        this.loading = false;
        this.countries = data.data['countries'].data;
        this.pagination = data.data['countries'].pagination;
      })
      .catch((error) => {
        this.loading = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
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

  searchFunc() {
    this.filters = Object.assign({}, {...this.filters, name: this.searchForm.get('search')?.value, page: 1})
    this.getContries(this.filters);
  }

  toggleDeleteCountryForm() {
    this.deleteCountryForm = !this.deleteCountryForm;
  }

  reset() {
    this.filters = {
      perPage: 10,
      page: 1
    }
    this.searchForm.reset();
    this.getContries();
  }

  onPageChange(event: number) {
    this.filters = Object.assign(
      {},
      { ...this.filters, page: event }
    );
    this.getContries(this.filters);
  }

  handlePageSizeChange() {
    this.filters = Object.assign({}, {...this.filters, per_page: this.perPage})
    this.getContries(this.filters);
  }

  handleStatusChange() {
    const NEW_VALUE = this.activity === 'actif' ? true : false;
    this.filters = Object.assign({}, {...this.filters, is_active: NEW_VALUE});
    this.getContries(this.filters);
  }

}
