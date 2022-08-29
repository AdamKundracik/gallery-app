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

  public categoryData: any[] = [];

  public category: string = "";

  constructor(private galleryService: GalleryService, private route: ActivatedRoute, private router: Router, private dialog: MatDialog) { }

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

  public openDialog(): void {
    this.dialog.open(AddPhotoDialogComponent, {
      width: '560px',
      height: '325px',
    }).afterClosed().subscribe(response => {
      if (response) {
        this.categoryData.unshift(response)
      }
    })
  }

  private getCategoryData(category: string): void {
    this.galleryService.getCategory(category).subscribe(photos => {
      this.categoryData = photos;
    })
  }


}
