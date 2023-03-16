import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuTabs } from './interfaces/menu-tabs.interface';

@Component({
  selector: 'app-menu-tabs',
  template: `
    <div [ngClass]="class" class="flex justify-between items-center gap-y-6 flex-col sm:flex-row">
        <div class="sm:hidden w-full">
          <label for="tabs" class="sr-only">Select a tab</label>
          <select id="tabs" name="tabs" [(ngModel)]="page" (change)="changePage()" class="block w-full rounded-md border-primary-500 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm">
            <option *ngFor="let tab of tabs" [value]="tab.link">{{tab.name}}</option>
          </select>
        </div>
        <div class="hidden sm:flex justify-between px-5">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
              <a *ngFor="let tab of tabs" [routerLink]="tab.link" routerLinkActive="active" class="border-transparent no-underline text-tertiary hover:border-gray-300 whitespace-nowrap px-1 border-b-2 font-semibold text-lg">{{tab.name}}</a>
            </nav>
          </div>
        </div>
        <ng-content></ng-content>
    </div> 
  `,
  styles: [
    `.active{
      border-color: #50D6B6 !important,
    }`
  ]
})
export class MenuTabsComponent {

  @Input() tabs!: MenuTabs[];
  @Input() class!: string;

  page!: string;

  constructor(private router: Router){}

  changePage(){
    this.router.navigate([this.page]);
  }

}
