import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-photo-dialog',
  templateUrl: './add-photo-dialog.component.html',
  styleUrls: ['./add-photo-dialog.component.scss']
})
export class AddPhotoDialogComponent implements OnInit {

  public files: any[] = [];


  constructor(private dialogRef: MatDialogRef<AddPhotoDialogComponent>) { }

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
    this.prepareFilesList(files);

  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      this.files.push(item);
      console.log(files)
    }
    // this.uploadFilesSimulator(0);
  }



  ngOnInit(): void {
  }

  public closeDialog(gallery: any): void {
    this.dialogRef.close(gallery);
  }
}
