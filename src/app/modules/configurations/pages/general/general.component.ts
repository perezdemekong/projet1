import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';
import { MenuTabs } from '@app/shared/components/tabs/menu-tabs/interfaces/menu-tabs.interface';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  routeParams!: string;

  menuTabs: MenuTabs[] = [
    {
      name: 'Général',
      link: '/configurations/general/settings'
    },
    {
      name: 'Limitations',
      link: '/configurations/general/limitations'
    }
  ]

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.unfuctionnal();
  }

  unfuctionnal() {
    this.pushInfoNotif("Cet onglet n'est pas encore fonctionnel");
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
