import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/models/employee-model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  formData: Employee;

  readonly APIUrl = "https://localhost:44351/api";

  getEmpList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.APIUrl + "/employee");
  }

  addEmployee(dep: Employee) {
    return this.http.post(this.APIUrl + "/employee", dep);
  }

  updateEmployee(dep: Employee) {
    return this.http.put(this.APIUrl + "/employee", dep);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.APIUrl + "/employee/" + id);
  }

  private _listener = new Subject<any>();

  listen(): Observable<any> {
    return this._listener.asObservable();
  }

  filter(filterBy: string) {
    this._listener.next(filterBy);
  }
}
