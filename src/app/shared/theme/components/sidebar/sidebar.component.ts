import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
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
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
