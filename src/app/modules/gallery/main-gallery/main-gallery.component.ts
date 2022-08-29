import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCategoryDialogComponent } from './../add-category-dialog/add-category-dialog.component';
import { Router } from '@angular/router';
import { GalleryService } from './../gallery.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
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
    }).afterClosed().subscribe(response => {
      if (response) {
        this.galleryData.unshift(response)
      }
    })
  }

  public redirectToGallery(category: string): void {
    this.router.navigateByUrl(`/gallery/${category}`)
  }

  private getGalleryData() {
    this.galleryService.getGallery().subscribe(res => {
      this.galleryData = res
      this.loadImages()
    })
  }

  private loadImages() {
    this.galleryData.forEach((gallery) => {
      this.galleryService.getCategory(gallery.name).subscribe(images => {
        gallery.images = images;
      })
    })
  }



}
