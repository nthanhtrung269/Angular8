import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'
import { DepartmentService } from 'src/app/services/department.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent implements OnInit {

  constructor(public dialogBox: MatDialogRef<AddDepComponent>, public service: DepartmentService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form != null) {
      form.resetForm();
    }

    this.service.formData = {
      DepartmentID: 0,
      DepartmentName: ''
    }
  }

  onClose() {
    this.dialogBox.close();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
