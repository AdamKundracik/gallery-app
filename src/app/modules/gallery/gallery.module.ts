import { AddCategoryDialogComponent } from './add-category-dialog/add-category-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { CategoryGalleryComponent } from './category-gallery/category-gallery.component';
import { MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainGalleryComponent,
    CategoryGalleryComponent,
    AddCategoryDialogComponent
  ],
  entryComponents: [
    AddCategoryDialogComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GalleryModule { }
