import { Component, OnInit, Input } from '@angular/core';
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
  private employee: Employee;
  constructor(private employeeService: EmployeeService,
     private toastService: MzToastService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  deleteEmployee(employee): boolean {
    if (confirm('Deseja deletar este Funcionário?')) {
      this.employeeService.destroyEmployee(employee.id).subscribe(data => {
        const index = this.employees.indexOf(employee);
        this.employees.splice(index, 1);
        this.toastService.show('Funcionário deletado', 8000, 'green');
      }, error => {
        this.toastService.show('Erro ao deletar Funcionário ' + employee.name, 8000, 'red');
      });
    }
    return false;
  }
}
