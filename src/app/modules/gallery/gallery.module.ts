
import { AddCategoryDialogComponent } from './add-category-dialog/add-category-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { CategoryGalleryComponent } from './category-gallery/category-gallery.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPhotoDialogComponent } from './add-photo-dialog/add-photo-dialog.component';
import { PhotoPipe } from 'src/app/shared/pipes/photoPipe.pipe';



@NgModule({
  declarations: [
    MainGalleryComponent,
    CategoryGalleryComponent,
    AddCategoryDialogComponent,
    PhotoPipe,
    AddPhotoDialogComponent
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
