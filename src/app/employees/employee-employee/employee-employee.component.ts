import { Component, OnInit, Input} from '@angular/core';

import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/employee.model';
import { MzToastService} from 'ngx-materialize';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-employee',
  templateUrl: './employee-employee.component.html',
  styleUrls: ['./employee-employee.component.css']
})
export class EmployeeEmployeeComponent implements OnInit {

  @Input() employee: Employee;

  constructor(
              private employeeService: EmployeeService,
              private toastService: MzToastService,
              private router: Router
              ) { }

  ngOnInit() { }

  onSubmit(f) {
    if (this.employee.id, this.employee) {
      this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(data => {
        this.toastService.show('Employee updated', 8000, 'green');
      }, error => {
        this.toastService.show('Problem in Form creation', 8000, 'red');
      });
    } else {
      this.employeeService.createEmployee(this.employee).subscribe(data => {
        this.router.navigate(['/employees/' + data.id]);
      }, error => {
        this.toastService.show('Problem in Form creation', 8000, 'red');
      });
    }
  }
}
