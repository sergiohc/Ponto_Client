import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { MaterializeModule } from 'ngx-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { routing } from './../app.routing';
import { FormsModule } from '@angular/forms';
import { EmployeeEmployeeComponent } from './employee-employee/employee-employee.component';
import { ClockInOutFormComponent } from './clock-in-out-form/clock-in-out-form.component';
import { ClockInOutListComponent } from './clock-in-out-list/clock-in-out-list.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    routing,
    FormsModule
  ],
  exports: [
    EmployeeListComponent
  ],
  declarations: [EmployeeListComponent, EmployeeNewComponent, EmployeeEditComponent, EmployeeEmployeeComponent, ClockInOutFormComponent, ClockInOutListComponent]
})
export class EmployeesModule { }
