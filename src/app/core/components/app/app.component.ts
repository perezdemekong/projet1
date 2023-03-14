import { Component, OnInit } from '@angular/core';
import { TitleService } from '@app/core/services/title.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit{
  title = 'code.tabiblib.backend.web.office.v1.angular';

  constructor(
    private titleService: TitleService
  ) {}

  ngOnInit() {
    this.titleService.setTitle();
  }
}
