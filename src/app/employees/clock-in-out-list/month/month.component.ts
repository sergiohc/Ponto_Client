import { Component, OnInit } from '@angular/core';
import { ClockInOutService } from '../../../shared/clock-in-out.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  constructor(
    private clockInOutService: ClockInOutService,
    private route: ActivatedRoute,
  ) { }

  rowData = [];

  columnDefs = [
    {
      headerName: 'Data', field: 'date',
      cellFilter: 'date:"longDate"'
    },
    {
      headerName: 'Entrada', field: 'hour1',
      cellFilter: 'date:"longDate"'
    },
    {
      headerName: 'Intervalo', field: 'hour2',
      cellFilter: 'date:"longDate"'
    },
    {
      headerName: 'Volta Intervalo', field: 'hour3',
      cellFilter: 'date:"longDate"'
    },
    {
      headerName: 'Saída', field: 'hour4',
      cellFilter: 'date:"longDate"'
    },
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
