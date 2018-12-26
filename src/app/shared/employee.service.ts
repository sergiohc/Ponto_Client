import { map } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class EmployeeService {

  constructor(private http: Http, private _tokenService: Angular2TokenService) { }
  /* INDEX */
  getEmployees() {
     return this._tokenService.get('employees').pipe(map(res => res.json()));
  }

  getEmployee(employee_id) {
    return this._tokenService.get('employees/' + employee_id).pipe(map(res => res.json()));
  }


  createEmployee(employee_params) {
    return this._tokenService.post('employees', employee_params).pipe(map(res => res.json()));
  }

  updateEmployee(employee_id, employee_params) {
    return this._tokenService.put('employees/' + employee_id, employee_params).pipe(map(res => res.json()));
  }


  destroyEmployee(employee_id) {
    return this._tokenService.delete('employees/' + employee_id).pipe(map(res => res.json()));
  }
}
