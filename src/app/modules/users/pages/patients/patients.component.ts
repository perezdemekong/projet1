import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFilterParams, Pagination } from '@app/core/interfaces/core.interface';
import { MedecineService } from '@app/modules/medicine/services/medecine.service';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';
import { Patient } from '../../interfaces/patients.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ opacity: 1, transform: 'scale(1, 1)' })),
      state('closed', style({ opacity: 0, transform: 'scale(0.95, 0.95)' })),
      transition('open => closed', [animate('100ms ease-in')]),
      transition('closed => open', [animate('200ms ease-out')]),
    ]),
  ]
})
export class PatientsComponent implements OnInit {

  searchForm: FormGroup = this.fb.group({
    search: ['', Validators.required]
  })

  filters = {
    per_page: 10,
    page: 1,
  }

  perPage: number = 10;
  activity!: "actif" | "inactif";

  perPageRange: number[] = [10, 20, 30, 40, 50];
  activitiesRange: string[] = ["actif", "inactif"];

  search!: string;

  patients: Patient[] = [];
  pagination!: Pagination;

  loading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(filter?: IFilterParams) {
    if (this.loading === false) {
      this.loading = true;
    }
    this.usersService.getPatients(filter)
      .then((data) => {
        this.loading = false;
        this.patients = data.data['patients'].data;
        this.pagination = data.data['patients'].pagination;
      }).catch((err) => {
        this.loading = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
      })
    ;
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
    this.getPatients(this.filters);
  }

  reset() {
    this.filters = {
      per_page: 10,
      page: 1
    }
    this.searchForm.reset();
    this.getPatients();
  }

  onPageChange(event: number) {
    this.filters = Object.assign(
      {},
      { ...this.filters, page: event, per_page: this.perPage }
    );
    this.getPatients(this.filters);
  }

  handlePageSizeChange() {
    this.filters = Object.assign({}, {...this.filters, per_page: this.perPage})
    this.getPatients(this.filters);
  }

  handleStatusChange() {
    const NEW_VALUE = this.activity === 'actif' ? 'enabled' : 'disabled';
    this.filters = Object.assign({}, {...this.filters, status: NEW_VALUE, per_page: this.perPage});
    this.getPatients(this.filters);
  }

}
