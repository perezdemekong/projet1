import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
  <div
    *ngIf="isOpen"
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 z-40 flex items-end px-4 py-6 sm:items-start sm:p-6">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <div
        @showHideNotification
        class="pointer-events-auto fixed w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <ng-content></ng-content>
      </div>
    </div>
  </div>
`,
animations: [
  trigger('showHideNotification', [
    transition('void => *', [
      style({ transform: 'translateX(0.5rem)', opacity: 0 }),
      animate(300, style({ transform: 'translateX(0)', opacity: 1 })),
    ]),
    transition('* => void', [
      animate(100, style({ opacity: 0 }))
    ]),
  ]),
],
})
export class NotificationComponent {

  @Input() class!: string;
  @Input() set isOpen(val: boolean) {
    if (!val) {
     setTimeout(() =>  this._isOpen = val, 100);
    }else{
      this._isOpen = val;
    }
  };

  private _isOpen!: boolean;

  get isOpen() { return this._isOpen };
}
