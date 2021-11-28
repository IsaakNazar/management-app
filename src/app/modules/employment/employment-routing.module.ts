import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { EmployeesListComponent } from "./employees-list/employees-list.component";
import { EmployeeComponent } from "./employee/employee.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    component: EmployeesListComponent
  },
  {
    path: 'employees/:id',
    component: EmployeeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploymentRoutingModule {}
