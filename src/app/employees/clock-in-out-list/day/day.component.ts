import { Component, OnInit } from '@angular/core';
import { ClockInOutService } from '../../../shared/clock-in-out.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  constructor(
    private clockInOutService: ClockInOutService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  rowData = [];

  columnDefs = [
    {headerName: 'Data', field: 'date'},
    {headerName: 'Entrada', field: 'hour1'},
    {headerName: 'Intervalo', field: 'hour2'},
    {headerName: 'Volta Intervalo', field: 'hour3'},
    {headerName: 'Saída', field: 'hour4'}
  ];

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.clockInOutService.getClockDay(params['id']).subscribe(data => {
          this.rowData = data
        });
      }
    });
  }

}
