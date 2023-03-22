import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.scss']
})
export class HistoricalComponent implements OnInit {

  searchForm: FormGroup = this.fb.group({
    search: ['', Validators.required]
  })

  loading: boolean = true;

  perPage: number = 10;
  confirm: "confirmer" | "infirmer" = "confirmer";
  rdv: "passé" | "à venir" = "à venir";

  perPageRange: number[] = [10, 20, 30, 40, 50];
  confirmation: string[] = ["confirmer", "infirmer"];
  rdvRange: string[] = ["passé", "à venir"];

  createReminderForm: boolean = false;

  search!: string;

  status = ['canceled', 'confirmed', 'ended'];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    setTimeout(() => this.loading = false, 3000);
  }

  chang() {
    console.log(this.searchForm.getRawValue());
    console.log(this.confirmation);
    console.log(this.perPage);
  }

  toggleCreateReminderForm() {
    this.createReminderForm = !this.createReminderForm;
  }

}
