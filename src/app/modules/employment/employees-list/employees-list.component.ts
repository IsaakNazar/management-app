import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { EmployeesService } from "../employees.service";
import { Employee } from "../../../shared/models/employee";
import { Observable, Subject, Subscription } from "rxjs";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})

export class EmployeesListComponent implements OnInit, OnDestroy {

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.closeModal()
  }

  employeesList: Employee[] = []
  searchTerm$ = new Subject<any>();
  subscription: Subscription
  isShowModal: boolean = false
  employee: Employee
  employeeStore = localStorage.getItem('employeesList')

  constructor(private employeesService: EmployeesService) {
  }

  ngOnInit(): void {
    this.getAllEmployees()
    this.filterList(this.searchTerm$);
  }

  getAllEmployees(): void {
    const length = this.employeeStore && JSON.parse(this.employeeStore).length
    if (length) {
      this.employeesList = this.employeeStore && JSON.parse(this.employeeStore)
    } else {
      this.subscription = this.employeesService.getAll()
        .subscribe((employees: Employee[]) => {
          this.employeesList = employees
          localStorage.setItem('employeesList', JSON.stringify(employees))
        })
    }
  }

  filterList(terms: Observable<any>): void {
    this.employeesService.search(terms)
      .subscribe(arr => this.employeesList = arr)
  }

  openModal(employee: Employee): void {
    this.employee = employee
    this.isShowModal = true
  }

  closeModal(): void {
    this.isShowModal = false
  }

  deleteEmployee(employeeId: string) {
    this.employeesList = this.employeesList.filter(item => item.Id !== employeeId)
    localStorage.setItem('employeesList', JSON.stringify(this.employeesList))
    this.closeModal()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
