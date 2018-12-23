import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'ngx-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { routing } from './../app.routing';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    routing
  ],
  exports: [
    EmployeeListComponent
  ],
  declarations: [EmployeeListComponent, EmployeeNewComponent, EmployeeEditComponent]
})
export class EmployeesModule { }
