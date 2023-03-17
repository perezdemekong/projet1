import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {

  languages: string[] = ["français", "arabe"];
  language: "français" | "arabe" = "français";

  timeZones: string[] = ["africa/alger"];
  timeZone!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
