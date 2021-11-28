import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeesService } from "../employees.service";
import { Employee } from "../../../shared/models/employee";
import { Observable, Subject, Subscription } from "rxjs";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit, OnDestroy {

  employeesList: Employee[] = []
  searchTerm$ = new Subject<any>();
  subscription: Subscription
  isShowModal: boolean = false

  constructor(private employeesService: EmployeesService) {
  }

  ngOnInit(): void {
    this.getAllEmployees()
    this.filterList(this.searchTerm$);
  }

  getAllEmployees() {
    this.subscription = this.employeesService.getAll()
      .subscribe(employees => this.employeesList = employees)
  }

  filterList(terms: Observable<any>) {
    this.employeesService.search(terms)
      .subscribe(arr => this.employeesList = arr)
  }

  openModal(employeeId: string) {
    console.log(employeeId);
    this.isShowModal = true
  }

  closeModal() {
    console.log('key');
    this.isShowModal = false
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
