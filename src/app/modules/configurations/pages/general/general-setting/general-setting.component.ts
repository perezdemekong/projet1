import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-general-setting',
  templateUrl: './general-setting.component.html',
  styleUrls: ['./general-setting.component.scss']
})
export class GeneralSettingComponent implements OnInit {

  appName = "Tabiblib";

  currencies: string[] = ['DZD', 'DOLLAR', 'EURO']
  countries: string[] = ['Algérie', 'Tunisie']

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.unfuctionnal();
  }

  unfuctionnal() {
    this.pushInfoNotif("Cette fonctionnalité n'est pas encore opérationnelle");
  }

  pushInfoNotif(message: string) {
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

}
