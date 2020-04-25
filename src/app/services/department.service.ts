import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from 'src/app/models/department-model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  formData: Department;

  readonly APIUrl = "https://localhost:44351/api";

  getDepList(): Observable<Department[]> {
    return this.http.get<Department[]>(this.APIUrl + "/department");
  }

  addDepartment(dep: Department) {
    return this.http.post(this.APIUrl + "/department", dep);
  }

  private _listener = new Subject<any>();

  listen(): Observable<any> {
    return this._listener.asObservable();
  }

  filter(filterBy: string) {
    this._listener.next(filterBy);
  }
}
