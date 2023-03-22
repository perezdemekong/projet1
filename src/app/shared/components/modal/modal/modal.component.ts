import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

type position = "absolute" | "fixed";

@Component({
  selector: 'app-modal',
  template: `
    <div *ngIf="visible" class="inset-0 z-[100000]" [ngClass]="{'absolute': position === 'absolute', 'fixed': position === 'fixed'}" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div [@showHideBackdrop]="isOpen ? 'showBackdrop' : 'hideBackdrop'" class="inset-0 bg-gray-500 bg-opacity-75 transition-opacity" [ngClass]="{'absolute': position === 'absolute', 'fixed': position === 'fixed'}"></div>
      <div class="inset-0 z-10 overflow-y-auto" [ngClass]="{'absolute': position === 'absolute', 'fixed': position === 'fixed'}">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div [@showHidePanel]="isOpen ? 'showPanel' : 'hidePanel'" class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6" [ngClass]="class">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('showHideBackdrop', [
      state('showBackdrop', style({ opacity: 1 })),
      state('hideBackdrop', style({ opacity: 0 })),
      transition('hideBackdrop => showBackdrop', animate('.3s ease-in')),
      transition('showBackdrop => hideBackdrop', animate('.2s ease-out')),
    ]),

    trigger('showHidePanel', [
      state('showPanel', style({ opacity: 1, transform: 'scale(1)' })),
      state('hidePanel', style({ opacity: 0, transform: 'scale(.95)' })),
      transition('hidePanel => showPanel', animate('.3s ease-in')),
      transition('showPanel => hidePanel', animate('.2s ease-out')),
    ])
  ]
})
export class ModalComponent {

  @Input() class!: string;
  @Input() position: position = 'absolute';
  @Input() set visible(value: boolean) {
    if(!value) {
      this.isOpen = value;
      setTimeout(() => this._visible = value, 100);
    }else {
      this._visible = value;
      setTimeout(() => this.isOpen = value, 2);
    }
  }
  
  _visible!: boolean;
  isOpen!: boolean;

  get visible(): boolean { 
    return this._visible; 
  }

}