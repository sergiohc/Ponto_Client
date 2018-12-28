import { Component, OnInit } from '@angular/core';
import { ClockInOutService } from '../../../shared/clock-in-out.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  constructor(
    private clockInOutService: ClockInOutService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  rowData = [];

  columnDefs = [
    {headerName: 'Data', field: 'date',
    cellRenderer: (data) => {
      return moment(data.date).format('MM/DD/YYYY')
    }},
    {headerName: 'Entrada', field: 'hour1',
    cellRenderer: (data) => {
      return moment(data.hour1).format('HH:mm')
    }},
    {headerName: 'Intervalo', field: 'hour2',
      cellRenderer: (data) => {
      return moment(data.hour2).format('HH:mm')
    }},
    {headerName: 'Volta Intervalo', field: 'hour3',
      cellRenderer: (data) => {
      return moment(data.hour3).format('HH:mm')
    }},
    {headerName: 'Saída', field: 'hour4',
    cellRenderer: (data) => {
      return moment(data.hour4).format('HH:mm')
    }},
  ];

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.clockInOutService.getClock(params['id']).subscribe(data => {
          this.rowData = data
        });
      }
    });
  }
}
