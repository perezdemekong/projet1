import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [type]="type"
      [disabled]="disabled"
      class="relative inline-flex items-center px-4 py-2 text-sm font-medium border border-transparent rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition ease-in-out duration-150"
      [ngClass]="class">
      <span *ngIf="loading">
        <svg
          class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4" />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </span>
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent implements OnInit {

  @Input() type!: "submit" | "button" | "reset";
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() class!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
