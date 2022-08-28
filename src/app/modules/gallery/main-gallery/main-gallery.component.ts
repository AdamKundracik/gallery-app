import { MatDialog } from '@angular/material/dialog';
import { AddCategoryDialogComponent } from './../add-category-dialog/add-category-dialog.component';
import { Router } from '@angular/router';
import { GalleryService } from './../gallery.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.scss'],

})
export class MainGalleryComponent implements OnInit {

  public galleryData: any[] = [];


  constructor(private galleryService: GalleryService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getGalleryData();
  }

  public openDialog(): void {
    this.dialog.open(AddCategoryDialogComponent, {
      width: '560px',
      height: '325px',
    })
  }

  public redirectToGallery(category: string): void {
    this.router.navigateByUrl(`/gallery/${category}`)
  }

  private getGalleryData(): void {
    this.galleryService.getGallery().subscribe(res => {
      this.galleryData = res;
      console.log(this.galleryData)
    })
  }



}
