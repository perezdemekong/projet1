import { Component, OnInit } from '@angular/core';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';

@Component({
  selector: 'app-employees-update',
  templateUrl: './employees-update.component.html',
  styleUrls: ['./employees-update.component.scss']
})
export class EmployeesUpdateComponent implements OnInit {

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Employés',
        link: '/configurations/employees'
      },
      referees: [
        {
          name: "Modifier un employé",
          link: ''
        }
      ]
    }
  ]

  passwordToggled: boolean = false;

  role: string = "gestionnaire"
  rolesList: string[] = ["sécrétaire", "gestionnaire"];

  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus() {
    this.status = !this.status;
  }

  togglePasswordToggled() {
    this.passwordToggled = !this.passwordToggled;
  }

}
