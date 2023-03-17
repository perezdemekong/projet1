import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  template: `
    <div [ngClass]="class" class="rounded-full bg-primary-100 sm:max-w-fit">
      <div class="flex items-center px-4 py-1 m-0">
        <div class="flex py-1.5 pr-1.5">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-400"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path><path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path></svg>
        </div>
        <label for="search" class="sr-only">Rechercher</label>
        <input 
          type="text" 
          name="search" 
          id="search" 
          [placeholder]="placeholder" 
          [value]="value"
          (input)="onChange($any($event.target).value)"
          (blur)="onTouched()"
          [ngClass]="InputClass"
          class="p-0 h-full sm:min-w-[300px] min-w-[220px] block w-full text-slate-700 placeholder:text-sm text-sm bg-primary-100 placeholder:text-gray-400  rounded-md border-transparent focus:border-primary-100 focus:ring-primary-100"
          >
      </div>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchBarComponent),
      multi: true,
    },
  ],
})
export class SearchBarComponent {
  
  @Input() placeholder!: string;
  @Input() class!: string;
  @Input() InputClass!: string;

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
