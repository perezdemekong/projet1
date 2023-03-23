import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { User } from '@app/modules/authentication/pages/interfaces/auth.interface';

import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({ opacity: 1, transform: 'scale(1, 1)' })),
      state('closed', style({ opacity: 0, transform: 'scale(0.95, 0.95)' })),
      transition('open => closed', [animate('100ms ease-in')]),
      transition('closed => open', [animate('200ms ease-out')]),
    ]),
  ]
})
export class HeaderComponent implements OnInit {

  @Output() showMobileMenu: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  @ViewChild('menuDropdown') menuDropdown!: ElementRef;

  mobileMenuOpen: boolean = false;
  user!: User;

  get openCloseTrigger() {
    return this.mobileMenuOpen ? 'open' : 'closed';
  }

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.localStorageService.getLocalStorage('user') || '');
  }

  toggleMobileMenuOpen() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  sendRequestToShowMobileMenu() {
    this.showMobileMenu.emit(true);
  }

  @HostListener('document:click', ['$event.target'])
  public onPageClick(targetElement: HTMLElement): void {
    const clickedInside =
      this.menuDropdown.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.mobileMenuOpen = false;
    }
  }

}
