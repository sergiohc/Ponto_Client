import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { map } from "rxjs/operators";

@Injectable()
export class ClockInOutService {

  constructor( private _tokenService: Angular2TokenService) { }

  getClockDay(employee_id){
    return this._tokenService.get('clock_in_out/' + employee_id+'?day=true').pipe(map(res => res.json()));
  }
  getArquiFDA(clock_id){
    return this._tokenService.get('clock_in_out/' + clock_id +'/import_afd').pipe(map(res => res.json()));
  }
  getClock(employee_id){
    return this._tokenService.get('clock_in_out/' + employee_id).pipe(map(res => res.json()));
  }

  createClock(clock_params) {
    return this._tokenService.post('clock_in_out', clock_params).pipe(map(res => res.json()));
  }

  updateClock(clock_id, clock_params) {
    return this._tokenService.put('clock_in_out/' + clock_id, clock_params).pipe(map(res => res.json()));
  }

}
