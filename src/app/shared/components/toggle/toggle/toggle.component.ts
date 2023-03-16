import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
    <button type="button" [ngClass]="backgroundClass" class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none" role="switch" aria-checked="false">
      <span class="sr-only">Use setting</span>
      <span [ngClass]="{'translate-x-5': toggled, 'translate-x-0': !toggled}" class="translate-x-0 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
        <span [ngClass]="{'opacity-100 ease-in duration-200': !toggled, 'opacity-0 ease-out duration-100': toggled}" class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity" aria-hidden="true">
          <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
        <span [ngClass]="{'opacity-100 ease-in duration-200 !text-secondary': toggled, 'opacity-0 ease-out duration-100': !toggled}" class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity" aria-hidden="true">
          <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 12 12">
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
    </button>
  `
})
export class ToggleComponent implements OnInit {

  @Input() backgroundClass!: any;
  @Input() toggled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
