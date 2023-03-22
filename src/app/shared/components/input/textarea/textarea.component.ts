import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  template: `
    <div [ngClass]="class" class="flex">
      <label [for]="labelFor" class="sr-only">{{label}}</label>
      <textarea 
        [rows]="rows" 
        [name]="name" 
        [id]="name" 
        [value]="value"
        (input)="onChange($any($event.target).value)"
        (blur)="onTouched()"
        [placeholder]="placeholder"
        class="block rounded-lg w-full bg-primary-100 resize-y border-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm sm:leading-6"
        >
      </textarea>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent {

  @Input() labelFor!: string;
  @Input() label!: string;
  @Input() rows!: number;
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() class!: string;

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
