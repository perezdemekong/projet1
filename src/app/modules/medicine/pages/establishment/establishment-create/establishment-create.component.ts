import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedecineService } from '@app/modules/medicine/services/medecine.service';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-establishment-create',
  templateUrl: './establishment-create.component.html',
  styleUrls: ['./establishment-create.component.scss']
})
export class EstablishmentCreateComponent implements OnInit {

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
          name: "Créer un établissement",
          link: ''
        }
      ]
    }
  ]

  establishmentTypeTable = ['public', 'prive'];
  establishmentType!: string;

  adminTypeTable = ['Mohamed Belaiouer', 'Mohamed Belaiouer1', 'Mohamed Belaiouer2'];
  admin!: string;

  villeTypeTable = ['Alger', 'Blida', 'Oran'];
  ville!: string;

  constructor(
    private fb: FormBuilder,
    private medecineService: MedecineService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  toggleStatus() {
    this.establishmentForm.get('status')?.setValue(!this.establishmentForm.get('status')?.value);
  }

  createEstablishment() {
    this.medecineService.postEstablishment(this.establishmentForm.getRawValue())
      .then((data) => {
        this.pushSuccesNotif('Établissement crée avec succès!');
      }).catch((error) => {
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
