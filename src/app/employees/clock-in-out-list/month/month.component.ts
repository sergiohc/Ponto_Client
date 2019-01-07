import { Component, OnInit } from "@angular/core";
import { ClockInOutService } from "../../../shared/clock-in-out.service";
import { ActivatedRoute } from "@angular/router";
import * as moment from "moment/moment";
@Component({
  selector: "app-month",
  templateUrl: "./month.component.html",
  styleUrls: ["./month.component.css"]
})
export class MonthComponent implements OnInit {
  constructor(
    private clockInOutService: ClockInOutService,
    private route: ActivatedRoute
  ) {}

  rowData = [];

  columnDefs = [
    {
      headerName: "Data",
      field: "date",
      cellFormatter: function(data) {
        moment.locale("pt-Br");
        return moment(data.value).format("L");
      }
    },
    {
      headerName: "Entrada",
      field: "hour1",
      cellFormatter: function(data) {
        moment.locale("pt-Br");
        return moment(data.value).format("LT");
      }
    },
    {
      headerName: "Intervalo",
      field: "hour2",
      cellFormatter: function(data) {
        moment.locale("pt-Br");
        return moment(data.value).format("LT");
      }
    },
    {
      headerName: "Volta Intervalo",
      field: "hour3",
      cellFormatter: function(data) {
        moment.locale("pt-Br");
        return moment(data.value).format("LT");
      }
    },
    {
      headerName: "Saída",
      field: "hour4",
      cellFormatter: function(data) {
        moment.locale("pt-Br");
        return moment(data.value).format("LT");
      }
    }
  ];

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params["id"] !== undefined) {
        this.clockInOutService.getClock(params["id"]).subscribe(data => {
          this.rowData = data;
        });
      }
    });
  }
}
