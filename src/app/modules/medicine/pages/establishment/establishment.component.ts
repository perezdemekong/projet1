import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFilterParams, Pagination } from '@app/core/interfaces/core.interface';
import { RequestLoaderService } from '@app/core/services/request-loader.service';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';
import { Establishment } from '../../interfaces/establishments.interface';
import { MedecineService } from '../../services/medecine.service';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.scss']
})
export class EstablishmentComponent implements OnInit {

  searchForm: FormGroup = this.fb.group({
    search: ['', Validators.required],
  })

  deleteEstablishmentForm: boolean = false;

  perPage: number = 10;
  activity!: "actif" | "inactif";

  typeOfEstablishment!: string;
  typesOfEstablishment: string[] = ["prive", "public"];

  adminTypeTable = ['Mohamed Belaiouer', 'Mohamed Belaiouer1'];
  admin!: string;

  establishments: Establishment[] = [];
  pagination!: Pagination | undefined;

  perPageRange: number[] = [10, 20, 30, 40, 50];
  activitiesRange: string[] = ["actif", "inactif"];

  filters: IFilterParams = {
    perPage: 10,
    page: 1
  }

  idOfEstablishmentToDelete!: number | null;

  search!: string;

  loading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private medecineService: MedecineService,
    private notificationService: NotificationService,
    private requestLoaderService: RequestLoaderService,
  ) { }

  ngOnInit(): void {
    this.getEstablishments();
  }

  getEstablishments(filter?: IFilterParams) {
    if (this.loading === false) {
      this.loading = true;
    }
    this.medecineService.getEstablishments(filter)
      .then((data) => {
        this.establishments = data.data['establishment'].data;
        this.pagination = data.data['establishment'].pagination;
        this.loading = false;
        console.log(data);
        console.log(this.establishments);
      }).catch((error) => {
        this.loading = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!')
      })
    ;
  }

  deleteEstablishment() {
    if (this.idOfEstablishmentToDelete) {
      this.toggleDeleteEstablishmentForm();
      this.requestLoaderService.startLoading();
      this.medecineService.deleteEstablishment(this.idOfEstablishmentToDelete)
        .then((data) => {
          this.requestLoaderService.stopLoader();
          this.getEstablishments();
          this.pushSuccessNotif('Cet établissement a été supprimée avec succès!');
        }).catch((err) => {
          this.requestLoaderService.stopLoader();
          this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
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
    this.filters = Object.assign({}, {...this.filters, name: this.searchForm.get('search')?.value})
    this.getEstablishments(this.filters);
  }

  toggleDeleteEstablishmentForm(id?: number) {
    id ? this.idOfEstablishmentToDelete = id : null;
    console.log(id);
    this.deleteEstablishmentForm = !this.deleteEstablishmentForm;
  }

  reset() {
    this.ngOnInit();
  }

  onPageChange(event: number) {
    this.filters = Object.assign(
      {},
      { ...this.filters, page: event, per_page: this.perPage }
    );
    this.getEstablishments(this.filters);
  }

  handlePageSizeChange() {
    this.filters = Object.assign({}, {...this.filters, per_page: this.perPage});
    this.getEstablishments(this.filters);
  }

  handleStatusChange() {
    const NEW_VALUE = this.activity === 'actif' ? 'enabled' : 'disabled';
    this.filters = Object.assign({}, {...this.filters, status: NEW_VALUE, per_page: this.perPage});
    this.getEstablishments(this.filters);
  }

  handleTypeChange() {
    this.filters = Object.assign({}, {...this.filters, type: this.typeOfEstablishment, per_page: this.perPage});
    this.getEstablishments(this.filters);
  }

  handleAdminChange() {
    this.filters = Object.assign({}, {...this.filters, admin_practician: this.admin, per_page: this.perPage});
    this.getEstablishments(this.filters);
  }

}
