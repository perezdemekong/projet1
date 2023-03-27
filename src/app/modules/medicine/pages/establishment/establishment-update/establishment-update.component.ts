import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MedecineService } from '@app/modules/medicine/services/medecine.service';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-establishment-update',
  templateUrl: './establishment-update.component.html',
  styleUrls: ['./establishment-update.component.scss']
})
export class EstablishmentUpdateComponent implements OnInit {

  establishmentForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    type: [null, Validators.required],
    city: [null, Validators.required],
    admin_practician: [null, Validators.required],
    address: [null, Validators.required],
    postal_code: [null, Validators.required],
    description: [null, Validators.required],
    status: [false, Validators.required]
  });

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Établissements',
        link: '/medicine/establishments'
      },
      referees: [
        {
          name: "Modifier un établissement",
          link: ''
        }
      ]
    }
  ]

  establishmentTypeTable = ['public', 'prive'];
  establishmentType!: string;

  adminTypeTable = ['Mohamed Belaiouer', 'Mohamed Belaiouer1'];
  admin!: string;

  villeTypeTable = ['Alger', 'Blida', 'Oran'];
  ville!: string;

  constructor(
    private fb: FormBuilder,
    private medecineService: MedecineService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getEstablishment();
  }

  getEstablishment() {
    this.medecineService.getEstablishment(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''))
      .then((data) => {
        this.establishmentForm.get('name')?.setValue(data.data['establishment'].name);
        this.establishmentForm.get('type')?.setValue(data.data['establishment'].type);
        this.establishmentForm.get('city')?.setValue(data.data['establishment'].city);
        this.establishmentForm.get('admin_practician')?.setValue(data.data['establishment'].admin_practician);
        this.establishmentForm.get('address')?.setValue(data.data['establishment'].address);
        this.establishmentForm.get('postal_code')?.setValue(data.data['establishment'].postal_code);
        this.establishmentForm.get('description')?.setValue(data.data['establishment'].description);
        this.establishmentForm.get('status')?.setValue(data.data['establishment'].status);
      }).catch((err) => {
        this.pushErrorNotif('Une érreur est survenue, veuillez reéssayer!');
      })
    ;
  }

  toggleStatus() {
    this.medecineService.toggleStatusOfEstablishment(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''), { status: !this.establishmentForm.get('status')?.value })
      .then((data) => {
        this.establishmentForm.get('status')?.setValue(data.data['establishment'].status);
      }).catch((err) => {
        this.pushErrorNotif('Une érreur est survenue, veuillez reéssayer!');
      });
  }

  updateEstablishment() {
    this.medecineService.putEstablishment(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''), this.establishmentForm.getRawValue())
      .then((data) => {
        this.pushSuccesNotif('Établissement modifié avec succès!');
      }).catch((err) => {
        this.pushErrorNotif('Une érreur est survenue, veuillez reéssayer!');
      })
    ;
  }

  pushSuccesNotif(message: string) {
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

}
