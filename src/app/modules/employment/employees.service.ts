import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from "rxjs/operators";
import { Employee } from "../../shared/models/employee";

@Injectable()
export class EmployeesService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Employee[]> {
    return this.http.get('assets/data/employees.json').pipe(
      map(employees => JSON.parse(JSON.stringify(employees)))
    )
  }

  search(terms: Observable<any>): Observable<Employee[]> {
    return terms.pipe(
      pluck('target', 'value'),
      debounceTime(500),
      filter(searchTerm => searchTerm.length > 2 || searchTerm.length === 0),
      distinctUntilChanged(),
      switchMap(search => {
        return this.getAll()
          .pipe(
            map(employees => {
              return employees.filter(em => em.FirstName.toLowerCase().includes(search))
            })
          )
      })
    )
  }
}
