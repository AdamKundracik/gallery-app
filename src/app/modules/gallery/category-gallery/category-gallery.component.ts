
import { ImagesDTO } from './../../../shared/models/ImagesDTO';
import { AddPhotoDialogComponent } from './../add-photo-dialog/add-photo-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-category-gallery',
  templateUrl: './category-gallery.component.html',
  styleUrls: ['./category-gallery.component.scss'],
})
export class CategoryGalleryComponent implements OnInit {
  public data: string[] = [];

  public categoryData: ImagesDTO[] = [];

  public category: string = '';

  public path: string = '';

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.has('category')) {
        this.category = params.get('category')!;
        this.getCategoryData(this.category);
      }
    });
  }

  public redirectToGallery() {
    this.router.navigateByUrl('/gallery');
  }

  public openDialog(): void {
    this.dialog
      .open(AddPhotoDialogComponent, {
        data: {
          category: this.category,
        },
        minHeight: '499px',
        maxHeight: '700px',
        width: '560px',
      })
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.categoryData.push(response);
        }
      });
  }

  private getCategoryData(category: string): void {
    this.galleryService.getCategory(category).subscribe((photos) => {
      this.categoryData = photos;
      console.log(this.categoryData);
      this.categoryData.forEach((photo) => {
        photo.httpsPath =
          'http://api.programator.sk/images/1212x909/' + photo.fullpath;
      });
    });
    console.log(this.categoryData);
  }

  //PREVIEW
  previewImage = false;
  showMask = false;
  currentLightboxImage: ImagesDTO = this.categoryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  onPreviewImage(index: number, path: string): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.categoryData[index];
    this.path = path;
    console.log(this.path);
  }

  onClosePreview() {
    this.showMask = false;
  }

  next(): void {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex > this.categoryData.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.categoryData[this.currentIndex];
  }

  prev(): void {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.categoryData.length - 1;
    }
    this.currentLightboxImage = this.categoryData[this.currentIndex];
  }
}
