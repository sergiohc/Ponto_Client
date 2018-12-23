import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { MzToastService } from 'ngx-materialize';

import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  private employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private toastService: MzToastService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      for (const employee of data){
        this.employees.push(new Employee(employee));
      }
    });
  }

  deleteEmployee(employee): boolean {
    if (confirm('Your want delete this employee?')) {
      this.employeeService.destroyEmployee(employee.id).subscribe(data => {
        const index = this.employees.indexOf(employee);
        this.employees.splice(index, 1);
        this.toastService.show('Form deleted', 8000, 'green');
      }, error => {
        this.toastService.show('Error in delete Form ' + employee.name, 8000, 'red');
      });
    }
    return false;
  }

}
