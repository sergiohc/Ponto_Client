import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/employee.model';
// preciso para pegar o id da rota
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  public employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.employeeService.getEmployee(params['id']).subscribe(data => {
          this.employee = new Employee(data);
        });
      }{
        console.log(this.employee == undefined)
      }
    });
  }
}
