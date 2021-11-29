import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from "../../../shared/models/employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: Employee
  @Output() onDeleteEvent = new EventEmitter<Employee>()

  constructor() { }

  ngOnInit(): void {
  }

  get fullName(): string {
    return `${this.employee.FirstName} ${this.employee.SecondName}`
  }

  deleteEmployee(employee: Employee) {
    this.onDeleteEvent.emit(employee)
  }

}
