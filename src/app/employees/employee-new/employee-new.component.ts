import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { MzToastService} from 'ngx-materialize';
import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  public employee: Employee = new Employee({user_id: 1, team_id: 1, office_id: 1});

  constructor(
    private employeeService: EmployeeService,
    private toastService: MzToastService,
  ) { }


  ngOnInit() {

  }

  onSubmit(f) {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      this.toastService.show('Employee send with sucess', 10000, 'green');
    }, error => {
      this.toastService.show('Problem in send Employee', 8000, 'red');
    });
  }
}

