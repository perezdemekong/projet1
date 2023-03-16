import { Component, OnInit } from '@angular/core';
import { Breadscrump } from '@app/shared/components/breadscrumb/interface/breadscrumb.interface';

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.scss']
})
export class EmployeesCreateComponent implements OnInit {

  breadscrumbs: Breadscrump[] = [
    {
      reference: {
        name: 'Employés',
        link: '/configurations/employees'
      },
      referees: [
        {
          name: "Créer un employé",
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
