import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { map } from "rxjs/operators";

@Injectable()
export class ClockInOutService {

  constructor(private http: Http, private _tokenService: Angular2TokenService) { }

  createClock(employee_id, clock) {
    return this._tokenService.post('clock_in_out', {employee_id: employee_id, clock}).pipe(
      map(res => res.json()));
  }

  updateQuestion(question_id, question_params) {
    return this._tokenService.put('questions/' + question_id, question_params).map(res =&gt; res.json());
  }

  destroyQuestion(question_id) {
    return this._tokenService.delete('questions/' + question_id).map(res =&gt; res.json());
  }
}
