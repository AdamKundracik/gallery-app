import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-category-gallery',
  templateUrl: './category-gallery.component.html',
  styleUrls: ['./category-gallery.component.scss'],
})
export class CategoryGalleryComponent implements OnInit {

  public categoryData: any[] = [];

  public category: string = "";

  constructor(private galleryService: GalleryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.has('category')) {
        this.category = params.get('category')!;
        console.log(this.category)
        this.getCategoryData(this.category);
      }
    });

  }

  public redirectToGallery() {
    this.router.navigateByUrl('/gallery')
  }


  private getCategoryData(category: string): void {
    this.galleryService.getCategory(category).subscribe(res => {
      this.categoryData = res;
      console.log(this.categoryData)
    })
  }
}
