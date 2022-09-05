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
import { DndDirective } from './dnd.directive';
import { CategoryGalleryAddItemComponent } from './category-gallery-add-item/category-gallery-add-item.component';
import { MainGalleryAddItemComponent } from './main-gallery-add-item/main-gallery-add-item.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    MainGalleryComponent,
    CategoryGalleryComponent,
    AddCategoryDialogComponent,
    PhotoPipe,
    AddPhotoDialogComponent,
    DndDirective,
    CategoryGalleryAddItemComponent,
    MainGalleryAddItemComponent,
  ],
  entryComponents: [AddCategoryDialogComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right'
    })
  ],
})
export class GalleryModule { }
