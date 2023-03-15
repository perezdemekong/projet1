import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tpanel',
  templateUrl: './tpanel.component.html',
  styles: [`
    .active {
      background-color: #50D6B6;
      color: white !important;

      &::before {
        position: absolute;
        right: .5rem;
        top: .5rem;
        content: '>';
        font-weight: 700 !important;
      }
    }
  `]
})
export class TpanelComponent implements OnInit {

  showMobileMenu: boolean = false;
  showAnimationResponsiveSideBar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMobileMenuFunc(value: boolean) {
    if (!this.showMobileMenu) {
      this.showMobileMenu = !this.showMobileMenu;
      setTimeout(() => this.showAnimationResponsiveSideBar = !this.showAnimationResponsiveSideBar, 100);
    }else {
      this.showAnimationResponsiveSideBar = !this.showAnimationResponsiveSideBar;
      setTimeout(() => this.showMobileMenu = !this.showMobileMenu, 200);
    }
  }

}
