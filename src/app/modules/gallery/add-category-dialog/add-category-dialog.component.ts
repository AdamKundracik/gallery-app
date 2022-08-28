import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.scss']
})
export class AddCategoryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCategoryDialogComponent>, private fb: FormBuilder) { }

  public categoryForm: FormGroup = new FormGroup({
    category: new FormControl('', [Validators.required]),
  });



  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.categoryForm.controls;
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  // public submit(): void {
  //   if (this.categoryForm.valid) {
  //   }
  // }

}
