import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-big-input-datalist',
  template: `
    <div [ngClass]="class" class="flex flex-1">
      <label [for]="labelFor" class="sr-only">{{label}}</label>
      <div [ngClass]="{'!bg-gray-200 !cursor-not-allowed': disabled}" class="px-2 py-2.5 border border-[#E4E5E7] bg-primary-100 w-full rounded-lg">
        <input 
          [type]="type" 
          [name]="name" 
          [id]="name" 
          [disabled]="disabled"
          [placeholder]="placeholder" 
          [value]="value"
          [attr.list]="list"
          (input)="onChange($any($event.target).value)"
          (blur)="onTouched()"
          class="focus:border-transparent px-2 py-1 w-full disabled:cursor-not-allowed focus:ring-transparent border-transparent block bg-transparent outline-none placeholder:text-[#E4E5E7] text-tertiary sm:text-sm"
          >
            <datalist [id]="list">
              <option *ngFor="let item of items" [value]="item.name">{{ item.name }}</option>
            </datalist>
      </div>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BigInputDatalistComponent),
      multi: true,
    },
  ],
})
export class BigInputDatalistComponent {

  @Input() labelFor!: string;
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() name!: string;
  @Input() disabled: boolean = false;
  @Input() class!: string;
  @Input() list!: string;
  @Input('options') items: any[] = []
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
