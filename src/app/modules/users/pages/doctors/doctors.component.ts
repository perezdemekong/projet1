import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';
import { UsersService } from '../../services/users.service';
import { IFilterParams, Pagination } from '@app/core/interfaces/core.interface';
import { Doctor } from '../../interfaces/doctors.interface';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  searchForm: FormGroup = this.fb.group({
    search: ['', Validators.required],
  })
  filters = {
    per_page: 10,
    page: 1,
  }
  pagination!: Pagination;

  perPage: number = 10;
  activity!: "actif" | "inactif";

  speciality!: string;
  specialities: string[] = ["Gynécologie", "Traumatologie", "Generaliste"];

  perPageRange: number[] = [10, 20, 30, 40, 50];
  activitiesRange: string[] = ["actif", "inactif"];
  doctors: Doctor[] = [];

  search!: string;

  loading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(filter?: IFilterParams) {
    if (this.loading === false) {
      this.loading = true;
    }
    this.usersService.getDoctors(filter)
      .then((data) => {
        this.loading = false;
        this.doctors = data.data['practicians'].data;
        this.pagination = data.data['practicians'].pagination;
      }).catch((err) => {
        this.loading = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
      })
    ;
  }

  getInactifDoctors() {
    if (this.loading === false) {
      this.loading = true;
    }
    this.usersService.getInactifDoctors()
      .then((data) => {
        this.loading = false;
        this.doctors = data.data['practicians'].data;
        this.pagination = data.data['practicians'].pagination;
      }).catch((err) => {
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

  customSearch() {
    this.filters = Object.assign({}, {...this.filters, search: this.searchForm.get('search')?.value, per_page: this.perPage});
    this.getDoctors(this.filters);
  }

  reset() {
    this.filters = {
      per_page: 10,
      page: 1
    }
    this.searchForm.reset();
    this.getDoctors();
  }

  onPageChange(event: number) {
    this.filters = Object.assign(
      {},
      { ...this.filters, page: event, per_page: this.perPage }
    );
    this.getDoctors(this.filters);
  }

  handlePageSizeChange() {
    this.filters = Object.assign({}, {...this.filters, per_page: this.perPage})
    this.getDoctors(this.filters);
  }

  handleStatusChange() {
    const NEW_VALUE = this.activity === 'actif' ? true : false;
    this.filters = Object.assign({}, {...this.filters, is_active: NEW_VALUE, per_page: this.perPage});
    this.getDoctors(this.filters);
  }

  handleSpecialityChange() {
    this.filters = Object.assign({}, {...this.filters, speciality: this.speciality, per_page: this.perPage});
    this.getDoctors(this.filters);
  }
}