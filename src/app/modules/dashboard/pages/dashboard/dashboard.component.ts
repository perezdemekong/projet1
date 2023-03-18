import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.loading = !this.loading, 3000);
  }

}
