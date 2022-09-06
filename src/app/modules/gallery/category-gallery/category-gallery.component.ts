import { ImagesDTO } from './../../../shared/models/ImagesDTO';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from '../gallery.service';
import { API_URL } from 'src/app/shared/global variables/global-variables';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-gallery',
  templateUrl: './category-gallery.component.html',
  styleUrls: ['./category-gallery.component.scss'],
})
export class CategoryGalleryComponent implements OnInit {
  private readonly API_URL: string = API_URL;

  public data: string[] = [];

  public categoryData: ImagesDTO[] = [];

  public category: string = '';

  public path: string = '';

  public loaded = false;

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.has('category')) {
        this.category = params.get('category')!;
        this.getCategoryData(this.category);
        this.timeout();
      }
    });
  }

  public timeout(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 4000);
  }

  addItem(newItem: ImagesDTO) {
    this.loaded = false;
    this.getCategoryData(this.category);
    this.toastr.success('Fotografia úspešne pridaná');
    this.timeout();
  }

  public redirectToGallery() {
    this.router.navigateByUrl('/gallery');
  }

  private getCategoryData(category: string): void {
    this.galleryService.getCategory(category).subscribe((photos) => {
      this.categoryData = photos;
      console.log(this.categoryData);
      this.categoryData.forEach((photo) => {
        photo.httpsPath = `${this.API_URL}/images/1212x909/` + photo.fullpath;
      });
    });
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
  }

  @HostListener('document:keydown.escape')
  onClosePreview() {
    this.showMask = false;
  }

  @HostListener('document:keydown.arrowright')
  next(): void {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex > this.categoryData.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.categoryData[this.currentIndex];
  }

  @HostListener('document:keydown.arrowleft')
  prev(): void {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.categoryData.length - 1;
    }
    this.currentLightboxImage = this.categoryData[this.currentIndex];
  }
}
