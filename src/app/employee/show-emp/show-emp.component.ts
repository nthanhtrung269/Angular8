import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Employee } from 'src/app/models/employee-model';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEmpComponent } from 'src/app/employee/add-emp/add-emp.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditEmpComponent } from '../edit-emp/edit-emp.component';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service: EmployeeService, private dialog: MatDialog, private snackBar: MatSnackBar) { 
    this.service.listen().subscribe((m: any) => {
      console.log(m);
      this.refreshEmpList();
    });
  }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Options', 'EmployeeID', 'EmployeeName', 'Department'];

  @ViewChild(MatSort)
  sort: MatSort;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList() {
    this.service.getEmpList().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLocaleLowerCase();
  }

  onEdit(emp: Employee) {
    this.service.formData = emp;

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(EditEmpComponent, dialogConfig);
  }

  onDelete(id: number) {
    if(confirm('Are you sure to delete?')) {
      this.service.deleteEmployee(id).subscribe(res => {
        this.refreshEmpList();
        this.snackBar.open(res.toString(), '', {
          duration: 3000,
          verticalPosition: 'top'
        });
      });
    }
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AddEmpComponent, dialogConfig);
  }
}
