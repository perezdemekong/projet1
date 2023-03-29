import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFilterParams, Pagination } from '@app/core/interfaces/core.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';
import { City } from '../../interfaces/city.interface';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  deleteCityForm: boolean = false;

  searchForm: FormGroup = this.fb.group({
    search: ['', Validators.required],
  })

  perPage: number = 10;
  activity: "actif" | "inactif" = "actif";

  filters: IFilterParams = {
    perPage: 10,
    page: 1
  }

  perPageRange: number[] = [10, 20, 30, 40, 50];
  activitiesRange: string[] = ["actif", "inactif"];

  cities: City[] = [];
  pagination!: Pagination;

  idOfCityToDelete!: number | null;

  search!: string;

  loading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getCities();
  }

  getCities(filter?: IFilterParams) {
    if (this.loading === false) {
      this.loading = true;
    }
    this.locationService.getCities(filter)
      .then((data) => {
        this.loading = false;
        this.cities = data.data['cities'].data;
        this.pagination = data.data['cities'].pagination;
        console.log(this.cities);
      }).catch((error) => {
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

  searchFunc() {
    this.filters = Object.assign({}, {...this.filters, name: this.searchForm.get('search')?.value, page: 1})
    this.getCities(this.filters);
  }

  toggleDeleteCityForm(id?: number) {
    this.deleteCityForm = !this.deleteCityForm;
    id ? this.idOfCityToDelete = id : this.idOfCityToDelete = null;
  }

  deleteCity() {
    if (this.idOfCityToDelete) {
      this.locationService.deleteCity(this.idOfCityToDelete)
        .then((data) => {
          this.getCities();
          this.toggleDeleteCityForm()
          this.pushSuccessNotif('Cette ville a été supprimée avec succès!');
        }).catch((error) => {
          this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
        })
      ;
    }
  }

  reset() {
    this.filters = {
      perPage: 10,
      page: 1
    }
    this.searchForm.reset();
    this.getCities();
  }

  onPageChange(event: number) {
    this.filters = Object.assign(
      {},
      { ...this.filters, page: event, per_page: this.perPage },
    );
    this.getCities(this.filters);
  }

  handlePageSizeChange() {
    this.filters = Object.assign({}, {...this.filters, per_page: this.perPage})
    this.getCities(this.filters);
  }

  handleStatusChange() {
    const NEW_VALUE = this.activity === 'actif' ? true : false;
    this.filters = Object.assign({}, {...this.filters, is_active: NEW_VALUE, per_page: this.perPage});
    this.getCities(this.filters);
  }

}
