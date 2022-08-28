import { CategoryGalleryComponent } from './category-gallery/category-gallery.component';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainGalleryComponent
  },
  {
    path: ':category',
    component: CategoryGalleryComponent

  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class GalleryRoutingModule { }

