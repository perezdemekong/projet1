import { Component, Input, OnInit } from '@angular/core';
import { Breadscrump } from '../interface/breadscrumb.interface';

@Component({
  selector: 'app-breadscrumb',
  template: `
  <nav aria-label="breadcrumb" [ngClass]="class" class="-mt-10">
      <ol *ngFor="let bread of breadcrumb" class="py-5 flex space-x-2.5 pl-0 mb-0">
        <li class="text-xs flex items-center text-slate-500">
          <a class="text-slate-500 no-underline" [routerLink]="bread.reference.link">{{bread.reference.name}}</a>
        </li>
        <li class="text-xs flex items-center text-slate-500" *ngFor="let bread of bread.referees">
          <svg class="text-slate-500 w-5 h-5" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.52092 5.25L11.4792 9L7.52091 12.75" stroke="#868AA5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <a class="ml-2.5 text-slate-500 no-underline capitalize" [routerLink]="bread.link">{{bread.name}}</a>
        </li>
      </ol>
  </nav>
`,
})
export class BreadscrumbComponent {

@Input() breadcrumb!: Breadscrump[];
@Input() class!: string;

}
