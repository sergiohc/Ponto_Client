import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MaterializeModule } from "ngx-materialize";
import { routing } from "./app.routing";

import { HttpModule } from "@angular/http";

import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { NotFoundComponent } from "./not-found/not-found.component";

import { UsersModule } from "./users/users.module";
import { Angular2TokenService } from "angular2-token";

import { EmployeesModule } from "./employees/employees.module";
import { EmployeeService } from "./shared/employee.service";
import { ClockInOutService } from "./shared/clock-in-out.service";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    UsersModule,
    EmployeesModule,
    routing
  ],
  providers: [Angular2TokenService, EmployeeService, ClockInOutService],
  bootstrap: [AppComponent]
})
export class AppModule {}
