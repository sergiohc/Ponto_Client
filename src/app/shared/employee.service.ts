import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService, A2tUiModule} from 'angular2-token';

@Injectable()
export class EmployeeService {

  constructor(private http: Http, private _tokenService: Angular2TokenService) { }

  getEmployees() {
    return this._tokenService.get('employees').map(res => res.json());
  }


  createEmployees(employee_params) {
    return this._tokenService.post('employees', employee_params).map(res => res.json());
  }

  updateEmployees(employee_id, employee_params) {
    return this._tokenService.put('employees/' + employee_id, employee_params).map(res => res.json());
  }


  destroyEmployees(employee_id) {
    return this._tokenService.delete('employeess/' + employee_id).map(res => res.json());
  }
}
