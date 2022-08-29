import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-photo-dialog',
  templateUrl: './add-photo-dialog.component.html',
  styleUrls: ['./add-photo-dialog.component.scss']
})
export class AddPhotoDialogComponent implements OnInit {

  public categoryForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });


  constructor(private dialogRef: MatDialogRef<AddPhotoDialogComponent>) { }

  ngOnInit(): void {
  }

  public closeDialog(gallery: any): void {
    this.dialogRef.close(gallery);
  }
}
