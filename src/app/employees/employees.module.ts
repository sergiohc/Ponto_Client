import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    EmployeeListComponent
  ],
  declarations: [EmployeeListComponent, EmployeeNewComponent, EmployeeEditComponent]
})
export class EmployeesModule { }
