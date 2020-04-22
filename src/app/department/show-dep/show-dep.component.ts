import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Department } from 'src/app/models/department-model';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor() { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Options', 'DepartmentID', 'DepartmentName'];

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList() {
    var dummyData = [
      { DepartmentID: 1, DepartmentName: 'IT' },
      { DepartmentID: 2, DepartmentName: 'Finance' }
    ]

    this.listData = new MatTableDataSource(dummyData);
  }

  onEdit(dep: Department) {
    console.log(dep);
  }

  onDelete(id: number) {
    console.log(id);
  }
}
