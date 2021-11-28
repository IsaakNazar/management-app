import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmploymentRoutingModule } from "./employment-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { EmployeesService } from "./employees.service";


@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmploymentRoutingModule,
    SharedModule
  ],
  providers: [
    EmployeesService
  ]
})
export class EmploymentModule {
}
