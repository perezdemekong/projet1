import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  template: `
    <input type="checkbox" class="block border-gray-300 rounded-sm checked:bg-primary-500 focus:border-primary-500 focus:ring-primary-500">
  `
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
