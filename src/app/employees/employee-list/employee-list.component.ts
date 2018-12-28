import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { MzToastService } from 'ngx-materialize';

import { Employee } from '../../shared/employee.model';

import { ClockInOutService } from '../../shared/clock-in-out.service';
import { ClockInOut } from '../../shared/clock_in_out.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  private employees: Employee[] = [];

  private clock: ClockInOut = new ClockInOut({});


  constructor(private employeeService: EmployeeService,
    private clockInOutService: ClockInOutService,
    private toastService: MzToastService,
    private router: Router) { }

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

  createClock(clock): boolean {
    if (confirm('Deseja registrar uma nova entrada?')) {
      this.clock.employee_id = clock.id
      this.clockInOutService.createClock(this.clock).subscribe(data => {
        this.router.navigate(['employees'])
        this.toastService.show('Ponto registrado', 8000, 'green');
      }, error => {
        this.toastService.show('Erro ao registrar ponto ', 8000, 'red');
      });
    }
    return false;
  }
}


