import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationService } from '@app/modules/location/services/location.service';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.scss']
})
export class CityCreateComponent implements OnInit {

  cityForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    country: [null, Validators.required],
    is_active: [false, Validators.required]
  });

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Villes',
        link: '/location/cities'
      },
      referees: [
        {
          name: "Créer une ville",
          link: ''
        }
      ]
    }
  ]

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  createCity() {
    this.locationService.postCity(this.cityForm.getRawValue())
      .then((response) => {
        this.pushSuccesNotif('Ville crée avec succès!');
      }).catch((error) => {
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!')
      })
    ;

    console.log(this.cityForm.getRawValue());
    
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
    this.cityForm.get('is_active')?.setValue(!this.cityForm.get('is_active')?.value);
  }

}
