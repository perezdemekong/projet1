import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Notification } from '../interfaces/notification.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationController: BehaviorSubject<Notification> = new BehaviorSubject<Notification>({
    isOpen: false
  });

  constructor() { }
}
