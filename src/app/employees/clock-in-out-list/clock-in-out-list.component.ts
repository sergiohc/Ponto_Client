import { Component, OnInit, Input } from '@angular/core';
import { ClockInOutService } from '../../shared/clock-in-out.service';
import { ClockInOut } from '../../shared/clock_in_out.model';

@Component({
  selector: 'app-clock-in-out-list',
  templateUrl: './clock-in-out-list.component.html',
  styleUrls: ['./clock-in-out-list.component.css']
})
export class ClockInOutListComponent implements OnInit {
  @Input() clock: ClockInOut[];
  @Input() employee_id: number;
  public clock_new: ClockInOut = new ClockInOut({});
  constructor() { }

  ngOnInit() {
  }

}
