import { Component, OnInit } from '@angular/core';
import { TitleService } from '@app/core/services/title.service';
import { Notification } from '@app/shared/components/notification/interfaces/notification.interface';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-notification [isOpen]="notification.isOpen">
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg
            *ngIf="notification.type === 'success'"
              class="h-6 w-6 text-green-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg
              *ngIf="notification.type === 'error'"
              class="w-6 h-6 text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg
              *ngIf="notification.type === 'info'"
              class="w-6 h-6 text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <svg
              *ngIf="notification.type === 'warning'"
              class="w-6 h-6 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p
              *ngIf="notification.title"
              class="text-sm font-medium text-slate-900">
              {{ notification.title }}
            </p>
            <p
              [ngClass]="{ 'mt-1': notification.title }"
              class="text-sm text-slate-700">
              {{ notification.message }}
            </p>
          </div>
          <div class="ml-4 flex flex-shrink-0">
            <button
              (click)="toggleIsOpen()"
              type="button"
              class="inline-flex rounded-md bg-white text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
              <span class="sr-only">Fermer</span>
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </app-notification>
  `,
})
export class AppComponent implements OnInit{
  title = 'Succès';
  message = 'Opération réalisée avec succès'

  notification!: Notification;

  constructor(
    private titleService: TitleService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.titleService.setTitle();
    this.notificationService.notificationController.subscribe((value: Notification) => this.notification = value);
  }

  toggleIsOpen() {
    this.notificationService.notificationController.next({
      isOpen: false,
    })
  }
}
