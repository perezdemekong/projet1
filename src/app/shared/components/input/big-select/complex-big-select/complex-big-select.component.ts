import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-complex-big-select',
  template: `
  <div [ngClass]="class" class="flex">
    <label [for]="labelFor" class="sr-only">{{label}}</label>
    <select 
      [name]="name" 
      [id]="name"
      [disabled]="disabled"
      [value]="value"
      (input)="onChange($any($event.target).value)"
      (blur)="onTouched()"
      class="block w-full focus:!border-transparent border-transparent bg-primary-100 disabled:bg-gray-200 disabled:cursor-not-allowed rounded-md py-1 px-1 outline-none focus:!ring-transparent sm:text-sm"
      >
        <option *ngIf="default">Choisir</option>
        <option *ngFor="let item of items" [selected]="item.name === selected" [value]="item.name">{{item.name}}</option>
    </select>
  </div>
`,
providers: [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ComplexBigSelectComponent),
    multi: true,
  },
],
})
export class ComplexBigSelectComponent {

@Input() labelFor!: string;
@Input() label!: string;
@Input() name!: string;
@Input() disabled: boolean = false;
@Input() class!: string;
@Input() selected!: string;
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
