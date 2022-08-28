

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryModule } from './modules/gallery/gallery.module';

const routes: Routes = [
  {
    path: 'gallery',
    loadChildren: () =>
      import('./modules/gallery/gallery.module').then((m) => GalleryModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'gallery',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
