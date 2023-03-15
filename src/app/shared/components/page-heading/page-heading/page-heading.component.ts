import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  template: `
    <div class="space-y-1 mb-10">
        <div class="flex justify-between items-center">
          <h1 class="font-bold text-2xl">{{title}}</h1>
          <ng-content></ng-content>
        </div>
        <p *ngIf="description" class="font-normal text-slate-600">{{description}}</p>
        <ng-content select="[presentation]"></ng-content>
    </div>
  `
})
export class PageHeadingComponent {

  @Input() title!: string;
  @Input() description!: string;

}
