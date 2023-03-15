import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-big-select',
  template: `
    <div [ngClass]="class" class="flex">
      <label [for]="labelFor" class="sr-only">{{label}}</label>
      <select 
        [name]="name" 
        [id]="name"
        [value]="value"
        (input)="onChange($any($event.target).value)"
        (blur)="onTouched()"
        class="block w-full focus:!border-transparent border-transparent bg-primary-100 rounded-md py-1 px-1 outline-none focus:!ring-transparent sm:text-sm"
        >
          <option *ngFor="let item of items" [value]="item">{{item}}</option>
      </select>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BigSelectComponent),
      multi: true,
    },
  ],
})
export class BigSelectComponent {

  @Input() labelFor!: string;
  @Input() label!: string;
  @Input() name!: string;
  @Input() class!: string;
  @Input('options') items: any[] = []

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
