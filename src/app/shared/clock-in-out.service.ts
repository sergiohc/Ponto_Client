import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { map } from "rxjs/operators";

@Injectable()
export class ClockInOutService {

  constructor(private http: Http, private _tokenService: Angular2TokenService) { }

  createClock(employee_id, clock) {
    return this._tokenService.post('clock_in_out', {employee_id: employee_id, clock}).pipe(map(res => res.json()));
  }

  updateClock(clock_id, clock_params) {
    return this._tokenService.put('clock_in_out/' + clock_id, clock_params).pipe(map(res => res.json()));
  }
}
