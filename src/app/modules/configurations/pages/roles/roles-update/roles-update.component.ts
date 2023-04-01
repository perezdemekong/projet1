import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RequestLoaderService } from '@app/core/services/request-loader.service';
import { Role } from '@app/modules/configurations/interfaces/roles.interface';
import { ConfigService } from '@app/modules/configurations/services/config.service';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-roles-update',
  templateUrl: './roles-update.component.html',
  styleUrls: ['./roles-update.component.scss']
})
export class RolesUpdateComponent implements OnInit {

  updateRoleForm: FormGroup = this.fb.group({
    // description: [null, Validators.required],
    status: [null, Validators.required],
  });

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Rôles',
        link: '/configurations/roles'
      },
      referees: [
        {
          name: "Modifier un role",
          link: ''
        }
      ]
    }
  ]

  status: boolean = false;

  search!: string;

  loading: boolean = true;

  role!: Role;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private requestLoaderService: RequestLoaderService,
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
    this.getRole();
  }

  getRole() {
    this.configService.getRole(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''))
      .then((data) => {
        this.loading = false;
        this.role = data.data['role'];
        this.updateRoleForm.get('description')?.setValue(this.role.description);
        this.updateRoleForm.get('status')?.setValue(this.role.status);
      }).catch((err) => {
        this.loading = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
      })
    ;
  }

  updateRole() {
    // const value = this.updateRoleForm.get('status')?.value ? 1 : 0;
    // this.requestLoaderService.startLoading();
    // this.configService.UpdateRole(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''), { status: value })
    //   .then((data) => {
    //     this.requestLoaderService.stopLoader();
    //     this.role = data.data['role'];
    //     this.updateRoleForm.get('description')?.setValue(this.role.description);
    //     this.updateRoleForm.get('status')?.setValue(this.role.status);
    //     this.pushSuccessNotif('Ce rôle a été modifié avec succès!');
    //   }).catch((err) => {
    //     this.requestLoaderService.stopLoader();
    //     this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
    //   })
    // ;
    this.pushinfoNotif('Cette fonctionnalité sera bientôt disponible!');
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

  pushinfoNotif(message: string) {
    this.notificationService.notificationController.next({
      isOpen: true,
      title: 'Information',
      message,
      type: 'info'
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

  toggleStatus() {
    this.updateRoleForm.get('status')?.setValue(!this.updateRoleForm.get('status')?.value);
  }

}
