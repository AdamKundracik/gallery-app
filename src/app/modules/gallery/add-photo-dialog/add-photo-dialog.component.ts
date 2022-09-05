import { GalleryService } from './../gallery.service';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-photo-dialog',
  templateUrl: './add-photo-dialog.component.html',
  styleUrls: ['./add-photo-dialog.component.scss'],
})
export class AddPhotoDialogComponent {
  public files: any[] = [];

  public category: string = '';

  constructor(
    private dialogRef: MatDialogRef<AddPhotoDialogComponent>,
    private route: ActivatedRoute,
    private galleryService: GalleryService,
    @Inject(MAT_DIALOG_DATA) data: { category: string }
  ) {
    this.category = data.category;
  }

  /**
   * on file drop handler
   */
  onFileDropped($event: Event[]) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files: any[]) {
    this.files = [];
    this.prepareFilesList(files);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: any[]) {
    for (const item of files) {
      if (item.size > 8000000) {
        console.log("PRILIS VELKY SUBOR");
      } else {
        this.files.push(item);
      }
    }
    console.log(files);
  }

  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  public closeDialog(image: any): void {
    this.dialogRef.close(image);
  }

  public upload(category: string): void {
    this.galleryService.uploadFile(this.files, category).subscribe((res) => {
      this.closeDialog(res);
    });
  }
}
