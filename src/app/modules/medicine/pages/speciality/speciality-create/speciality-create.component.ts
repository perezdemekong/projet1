import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestLoaderService } from '@app/core/services/request-loader.service';
import { MedecineService } from '@app/modules/medicine/services/medecine.service';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-speciality-create',
  templateUrl: './speciality-create.component.html',
  styleUrls: ['./speciality-create.component.scss']
})
export class SpecialityCreateComponent implements OnInit {

  specialityForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    code: [null, Validators.required],
    status: [false, Validators.required]
  });

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Spécialité',
        link: '/medicine/specialities'
      },
      referees: [
        {
          name: "Créer une spécialité",
          link: ''
        }
      ]
    }
  ]

  constructor(
    private medecineService: MedecineService,
    private notificationService: NotificationService,
    private fb: FormBuilder,
    private requestLoaderService: RequestLoaderService,
  ) { }

  ngOnInit(): void {
  }

  createSpeciality() {
    this.requestLoaderService.startLoading();
    this.medecineService.postSpeciality(this.specialityForm.getRawValue())
      .then((data) => {
        this.requestLoaderService.stopLoader();
        this.pushSuccessNotif('Spécialité crée avec succès!');
      }).catch((error) => {
        this.requestLoaderService.stopLoader();
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

  toggleStatus() {
    this.specialityForm.get('status')?.setValue(!this.specialityForm.get('status')?.value);
  }

}
