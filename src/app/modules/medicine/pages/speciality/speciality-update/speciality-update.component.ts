import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RequestLoaderService } from '@app/core/services/request-loader.service';
import { MedecineService } from '@app/modules/medicine/services/medecine.service';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-speciality-update',
  templateUrl: './speciality-update.component.html',
  styleUrls: ['./speciality-update.component.scss']
})
export class SpecialityUpdateComponent implements OnInit {

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
          name: "Modifier une spécialité",
          link: ''
        }
      ]
    }
  ]

  status: boolean = false;


  constructor(
    private medecineService: MedecineService,
    private notificationService: NotificationService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private requestLoaderService: RequestLoaderService
  ) { }

  ngOnInit(): void {
    this.getSpeciality();
  }

  getSpeciality() {
    this.requestLoaderService.startLoading();
    this.medecineService.getSpeciality(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''))
      .then((data) => {
        this.specialityForm.get('name')?.setValue(data.data['speciality'].name);
        this.specialityForm.get('code')?.setValue(data.data['speciality'].code);
        this.specialityForm.get('status')?.setValue(data.data['speciality'].status);
        this.requestLoaderService.stopLoader();
      }).catch((err) => {
        this.requestLoaderService.stopLoader();
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
      })
    ;
  }

  updateSpeciality() {
    this.requestLoaderService.startLoading();
    this.medecineService.putSpeciality(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''), this.specialityForm.getRawValue())
      .then((data) => {
        this.requestLoaderService.stopLoader();
        this.pushSuccessNotif('Établissement modifié avec succès!');
      }).catch((err) => {
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
    this.requestLoaderService.startLoading();
    this.medecineService.toggleStatusOfSpeciality(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''), { status: !this.specialityForm.get('status')?.value })
      .then((data) => {
        this.requestLoaderService.stopLoader();
        this.specialityForm.get('status')?.setValue(data.data['speciality'].status);
      }).catch((err) => {
        this.requestLoaderService.stopLoader();
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
      })
    ;
  }

}
