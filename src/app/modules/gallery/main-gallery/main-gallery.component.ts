import { MatDialog } from '@angular/material/dialog';
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

  constructor(private galleryService: GalleryService, private router: Router) {}

  ngOnInit(): void {
    this.getGalleryData();
  }

  public redirectToGallery(category: string): void {
    this.router.navigateByUrl(`/gallery/${category}`);
  }

  private getGalleryData() {
    this.galleryService.getGallery().subscribe((res) => {
      this.galleryData = res;
      this.loadImages();
    });
  }

  private loadImages() {
    this.galleryData.forEach((gallery) => {
      this.galleryService.getCategory(gallery.name).subscribe((images) => {
        gallery.images = images;
      });
    });
  }
}
