import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeesModule } from './employees/employees.module';

import { UsersModule } from './users/users.module';

import { Angular2TokenService } from 'angular2-token';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeNewComponent } from './employees/employee-new/employee-new.component';


import { ClockInOutFormComponent } from './employees/clock-in-out-form/clock-in-out-form.component';
import { ClockInOutListComponent } from './employees/clock-in-out-list/clock-in-out-list.component';

import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'employees', component: EmployeeListComponent, canActivate: [Angular2TokenService]},
    { path: 'employees/:id', component: EmployeeEditComponent, canActivate: [Angular2TokenService]},
    { path: 'employee/new', component: EmployeeNewComponent, canActivate: [Angular2TokenService]},
    { path: 'clock-in-out/:id', component: ClockInOutListComponent, canActivate: [Angular2TokenService]},
    { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
