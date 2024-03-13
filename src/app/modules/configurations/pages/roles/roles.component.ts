import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFilterParams, Pagination } from '@app/core/interfaces/core.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';
import { Role } from '../../interfaces/roles.interface';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  searchForm: FormGroup = this.fb.group({
    search: ['', Validators.required],
  })

  filters = {
    perPage: 10,
    page: 1,
  }

  perPage: number = 10;
  activity!: "actif" | "inactif";

  code!: string;
  codesList: string[] = ["root", "admin"];

  perPageRange: number[] = [10, 20, 30, 40, 50];
  activitiesRange: string[] = ["actif", "inactif"];

  search!: string;

  loading: boolean = true;

  roles: Role[] = [];
  pagination!: Pagination;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(filter?: IFilterParams) {
    if (this.loading === false) {
      this.loading = true;
    }
    this.configService.getRoles(filter)
      .then((data) => {
        this.loading = false;
        this.roles = data.data['roles'].data;
        console.log(this.roles);
        this.pagination = data.data['roles'].pagination;
      }).catch((err) => {
        this.loading = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
      });
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

  searchByLibelle() {
    this.filters = Object.assign({}, {...this.filters, display_name: this.searchForm.get('search')?.value, per_page: this.perPage});
    this.getRoles(this.filters);
  }

  reset() {
    this.filters = {
      perPage: 10,
      page: 1
    }
    this.searchForm.reset();
    this.getRoles();
  }

  onPageChange(event: number) {
    this.filters = Object.assign(
      {},
      { ...this.filters, page: event, per_page: this.perPage }
    );
    this.getRoles(this.filters);
  }

  handlePageSizeChange() {
    this.filters = Object.assign({}, {...this.filters, per_page: this.perPage})
    this.getRoles(this.filters);
  }

  handleStatusChange() {
    const NEW_VALUE = this.activity === 'actif' ? true : false;
    this.filters = Object.assign({}, {...this.filters, status: NEW_VALUE, per_page: this.perPage});
    this.getRoles(this.filters);
  }

  handleRoleCodeChange() {
    this.filters = Object.assign({}, {...this.filters, name: this.code, per_page: this.perPage});
    this.getRoles(this.filters);
  }

}
