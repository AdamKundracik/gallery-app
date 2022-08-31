import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.scss'],
})
export class AddCategoryDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddCategoryDialogComponent>,
    private fb: FormBuilder,
    private galleryService: GalleryService
  ) {}

  public categoryForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  public closeDialog(gallery: any): void {
    this.dialogRef.close(gallery);
  }

  public submit(): void {
    if (this.categoryForm.valid) {
      console.log(this.categoryForm.get('name')?.value);
      this.galleryService
        .createCategory(this.categoryForm.value)
        .subscribe((response) => {
          this.closeDialog(response);
          this.galleryService.getGallery();
        });
    }
  }
}
