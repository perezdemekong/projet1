import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss']
})
export class SpecialityComponent implements OnInit {

  searchForm: FormGroup = this.fb.group({
    search: ['', Validators.required],
  })

  deleteSpecialityForm: boolean = false;

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

  toggleDeleteSpecialityForm() {
    this.deleteSpecialityForm = !this.deleteSpecialityForm;
  }

}
