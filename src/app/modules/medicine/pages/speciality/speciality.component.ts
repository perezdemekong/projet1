import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFilterParams, Pagination } from '@app/core/interfaces/core.interface';
import { RequestLoaderService } from '@app/core/services/request-loader.service';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';
import { Speciality } from '../../interfaces/speciality.interface';
import { MedecineService } from '../../services/medecine.service';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss']
})
export class SpecialityComponent implements OnInit {

  searchForm: FormGroup = this.fb.group({
    search: ['', Validators.required],
  })

  deleteSpecialityForm: boolean = false;

  perPage: number = 10;
  activity!: "actif" | "inactif";

  perPageRange: number[] = [10, 20, 30, 40, 50];
  activitiesRange: string[] = ["actif", "inactif"];

  specialities: Speciality[] = [];
  pagination: Pagination | undefined;;

  filters: IFilterParams = {
    perPage: 10,
    page: 1
  }

  search!: string;

  loading: boolean = true;

  idOfSpecialityToDelete: number | undefined;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private medecineService: MedecineService,
    private requestLoaderService: RequestLoaderService,
  ) { }

  ngOnInit(): void {
    this.getSpecialities();
  }

  getSpecialities(filter?: IFilterParams) {
    if (this.loading === false) {
      this.loading = true;
    }
    this.medecineService.getSpecialities(filter)
      .then((data) => {
        this.loading = false;
        this.specialities = data.data['speciality'].data;
        this.pagination = data.data['speciality'].pagination;
        console.log(this.specialities);
      }).catch((err) => {
        this.loading = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
      })
    ;
  }

  deleteSpeciality() {
    if (this.idOfSpecialityToDelete) {
      this.deleteSpecialityForm = !this.deleteSpecialityForm;
      this.requestLoaderService.startLoading();
      this.medecineService.deleteSpeciality(this.idOfSpecialityToDelete)
        .then((data) => {
          this.requestLoaderService.stopLoader();
          this.idOfSpecialityToDelete = undefined;
          this.getSpecialities();
          this.pushSuccessNotif('Cette spécialité a été supprimée avec succès!');
        }).catch((error) => {
          this.requestLoaderService.stopLoader();
          this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
          this.idOfSpecialityToDelete = undefined;
        })
      ;
    }
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

  searchFunc() {
    this.filters = Object.assign({}, {...this.filters, name: this.searchForm.get('search')?.value, page: 1})
    this.getSpecialities(this.filters);
  }

  toggleDeleteSpecialityForm(id?: number) {
    id ? this.idOfSpecialityToDelete = id : this.idOfSpecialityToDelete = undefined;
    this.deleteSpecialityForm = !this.deleteSpecialityForm;
  }

  reset() {
    this.filters = {
      perPage: 10,
      page: 1
    }
    this.searchForm.reset();
    this.getSpecialities();
  }

  onPageChange(event: number) {
    this.filters = Object.assign(
      {},
      { ...this.filters, page: event, per_page: this.perPage }
    );
    this.getSpecialities(this.filters);
  }

  handlePageSizeChange() {
    this.filters = Object.assign({}, {...this.filters, per_page: this.perPage})
    this.getSpecialities(this.filters);
  }

  handleStatusChange() {
    const NEW_VALUE = this.activity === 'actif' ? true : false;
    this.filters = Object.assign({}, {...this.filters, status: NEW_VALUE, per_page: this.perPage});
    this.getSpecialities(this.filters);
  }

}
