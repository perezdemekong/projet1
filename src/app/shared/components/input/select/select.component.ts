import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  template: `
    <div class="py-1 text-left px-1">
      <label [for]="name" class="sr-only">{{label}}</label>
      <select 
        [id]="name" 
        [name]="name" 
        [value]="value"
        (input)="onChange($any($event.target).value)"
        (blur)="onTouched()"
        class="block border-primary-100 w-full rounded-md bg-primary-100 py-2 pl-3 pr-10 text-base focus:border-primary-100 focus:outline-none focus:ring-primary-100 sm:text-sm"
        >
        <option *ngIf="default">Tous</option>
        <option *ngFor="let item of items" [value]="item">{{item}}</option>
      </select>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent {

  @Input() label!: string;
  @Input() name!: string;
  @Input() default: boolean = false;
  @Input('options') items: any[] = [];

  value: string = '';

  writeValue(value: string): void {
    if (value !== undefined) {
      this.value = value;
      this.onChange(value);
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onChange = (value: string) => {};

  onTouched = () => {};

}
