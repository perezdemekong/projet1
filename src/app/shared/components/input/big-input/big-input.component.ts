import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-big-input',
  template: `
    <div [ngClass]="class" class="flex">
      <label [for]="labelFor" class="sr-only">{{label}}</label>
      <div class="px-2 py-2.5 border border-[#E4E5E7] bg-primary-100 w-full rounded-lg">
        <input 
          [type]="type" 
          [name]="name" 
          [id]="name" 
          [placeholder]="placeholder" 
          [value]="value"
          (input)="onChange($any($event.target).value)"
          (blur)="onTouched()"
          class="focus:border-transparent px-2 py-1 w-full focus:ring-transparent border-transparent block bg-transparent outline-none placeholder:text-[#E4E5E7] text-tertiary sm:text-sm"
          >
      </div>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BigInputComponent),
      multi: true,
    },
  ],
})
export class BigInputComponent {

  @Input() labelFor!: string;
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() name!: string;
  @Input() class!: string;
  @Input() placeholder: string = '';

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
