import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddCategoryDialogComponent } from '../add-category-dialog/add-category-dialog.component';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-main-gallery-add-item',
  templateUrl: './main-gallery-add-item.component.html',
  styleUrls: ['./main-gallery-add-item.component.scss'],
})
export class MainGalleryAddItemComponent {
  @Input()
  public galleryData: any[] = [];

  constructor(private dialog: MatDialog, private toastr: ToastrService) {}

  public openDialog(): void {
    this.dialog
      .open(AddCategoryDialogComponent, {
        width: '560px',
        height: '325px',
      })
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.galleryData.unshift(response);
          this.toastr.success('Nová kategória úspešne vytvorena');
        }
      });
  }
}
