import { ToastrService } from 'ngx-toastr';
import { API_URL } from './../../../shared/global variables/global-variables';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddPhotoDialogComponent } from '../add-photo-dialog/add-photo-dialog.component';
import { GalleryService } from '../gallery.service';
import { ImagesDTO } from 'src/app/shared/models/ImagesDTO';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-category-gallery-add-item',
  templateUrl: './category-gallery-add-item.component.html',
  styleUrls: ['./category-gallery-add-item.component.scss']
})
export class CategoryGalleryAddItemComponent {
  private readonly API_URL: string = API_URL

  @Input()
  public category: string = "";

  @Input()
  public categoryData: ImagesDTO[] = [];

  @Output() newItemEvent = new EventEmitter<ImagesDTO>();

  public loaded = true;

  constructor(
    private dialog: MatDialog,
  ) { }

  addNewItem(value: ImagesDTO) {
    this.newItemEvent.emit(value);
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
          this.addNewItem(response);
          this.categoryData.push(response);
        }
      }
      );
  }

}
