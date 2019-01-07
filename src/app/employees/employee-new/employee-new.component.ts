import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { MzToastService} from 'ngx-materialize';
import { Employee } from '../../shared/employee.model';
import {Router} from "@angular/router"
@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  public employee: Employee = new Employee({});

  constructor(
    private employeeService: EmployeeService,
    private toastService: MzToastService,
    private router: Router
  ) { }


  ngOnInit() {

  }

  onSubmit(f) {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      this.toastService.show('Employee send with sucess', 10000, 'green');
      this.router.navigate(['/employees']);
    }, error => {
      this.toastService.show('Problem in send Employee', 8000, 'red');
    });
  }
}

