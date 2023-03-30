import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLoaderService } from '@app/core/services/request-loader.service';
import { User } from '@app/modules/authentication/pages/interfaces/auth.interface';
import { AuthService } from '@app/modules/authentication/services/auth.service';

import { LocalStorageService } from '@app/modules/authentication/services/local-storage.service';
import { NotificationService } from '@app/shared/components/notification/services/notification.service';

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

  loading: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private requestLoaderService: RequestLoaderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.localStorageService.getLocalStorage('user') || '');
  }

  logOut() {
    this.loading = true;
    this.authService.logOut()
      .then((data) => {
        this.loading = false;
        this.destroyLocalStorage();
        this.router.navigateByUrl('/auth/login');
        this.pushSuccessNotif('Déconnexion effectutée avec succès!');
      }).catch((error) => {
        console.log(error);
        this.loading = false;
        this.pushErrorNotif('Une érreur est survenue, veuillez réessayer!');
      })
    ;
  }

  destroyLocalStorage() {
    this.localStorageService.removeAccessToken();
  }

  pushSuccessNotif(message: string) {
    this.notificationService.notificationController.next({
      isOpen: true,
      title: 'Succès',
      message,
      type: 'success'
    })
    setTimeout(() => {
      this.notificationService.notificationController.next({
        isOpen: false
      })
    }, 3000)
  }

  pushErrorNotif(message: string) {
    this.notificationService.notificationController.next({
      isOpen: true,
      title: 'Érreur',
      message,
      type: 'error'
    })
    setTimeout(() => {
      this.notificationService.notificationController.next({
        isOpen: false
      })
    }, 3000)
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
