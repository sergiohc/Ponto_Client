import { Component, OnInit } from '@angular/core';
import { ClockInOutService } from '../../../shared/clock-in-out.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
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
    {
      headerName: 'Data', field: 'date',
      type: ['dateColumn']
    },
    {
      headerName: 'Entrada', field: 'hour1',
      type: ['dateColumn'],
      cellFilter: 'date:"dd-MM-yyyy HH:mm'
    },
    {
      headerName: 'Intervalo', field: 'hour2',
      type: ['dateColumn']
    },
    {
      headerName: 'Volta Intervalo', field: 'hour3',
      type: ['dateColumn']
    },
    {
      headerName: 'Saída', field: 'hour4',
      type: ['dateColumn']
    },
  ];

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.clockInOutService.getClockDay(params['id'], params['day']).subscribe(data => {
          this.rowData = data
        });
      }
    });
  }
}
