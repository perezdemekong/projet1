import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-limitations',
  templateUrl: './limitations.component.html',
  styleUrls: ['./limitations.component.scss']
})
export class LimitationsComponent implements OnInit {

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
