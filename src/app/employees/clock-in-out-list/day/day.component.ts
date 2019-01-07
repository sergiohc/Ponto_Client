import { Component, OnInit } from "@angular/core";
import { ClockInOutService } from "../../../shared/clock-in-out.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ClockInOut } from "src/app/shared/clock_in_out.model";
import { HttpClient } from "@angular/common/http";
import * as moment from "moment/moment";

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit {
  constructor(
    private clockInOutService: ClockInOutService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  rowData = [];
  private clock: ClockInOut[] = [];
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
        this.clockInOutService.getClockDay(params["id"]).subscribe(data => {
          this.rowData = data;
          this.clock = data;
        });
      }
    });
  }

  importFDA() {
    console.log(this.clock[0].id);
    this.clockInOutService.getArquiFDA(this.clock[0].id).subscribe(data => {});
  }
}
