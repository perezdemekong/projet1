import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '@app/modules/location/services/location.service';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-city-update',
  templateUrl: './city-update.component.html',
  styleUrls: ['./city-update.component.scss']
})
export class CityUpdateComponent implements OnInit {

  updateForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    country: [null, Validators.required],
    is_active: [null, Validators.required]
  });

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Villes',
        link: '/location/cities'
      },
      referees: [
        {
          name: "Modifier une ville",
          link: ''
        }
      ]
    }
  ]

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getCity();
  }

  getCity() {
    this.locationService.getCity(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''))
      .then((data) => {
        this.updateForm.get('name')?.setValue(data.data['city'].name);
        this.updateForm.get('is_active')?.setValue(data.data['city'].is_active);
        this.updateForm.get('country')?.setValue(data.data['city'].country);
      }).catch((error) => {
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!')
      })
    ;
  }

  updateCity() {
    this.locationService.updateCity(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''), this.updateForm.getRawValue())
      .then((data) => {
        this.pushSuccesNotif('Ville modifiée avec succès!');
        this.getCity();
      }).catch((error) => {
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!')
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

  toggleStatus() {
    this.locationService.toggleStatusOfCity(parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ''), { is_active:!this.updateForm.get('is_active')?.value })
      .then((data) => {
        this.getCity();
        this.pushSuccesNotif('Le status de la ville a été modifié avec succès!');
      }).catch((error) => {
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!')
      })
    ;
  }

}
