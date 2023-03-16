import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  deleteCurrencyForm: boolean = false;

  searchForm: FormGroup = this.fb.group({
    search: ['', Validators.required],
  })

  perPage: number = 10;
  activity: "actif" | "inactif" = "actif";

  perPageRange: number[] = [10, 20, 30, 40, 50];
  activitiesRange: string[] = ["actif", "inactif"];

  search!: string;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  chang() {
    console.log(this.searchForm.getRawValue());
    console.log(this.activity);
    console.log(this.perPage);
  }

  toggleDeleteCurrencyForm() {
    this.deleteCurrencyForm = !this.deleteCurrencyForm;
  }

}
