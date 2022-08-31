import { category } from './../../shared/models/type';
import { ImagesDTO } from './../../shared/models/ImagesDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateCategoryDTO } from 'src/app/shared/models/createCategoryDTO';
import { GalleriesModel } from 'src/app/shared/models/galleries-model';
import { GalleryModel } from 'src/app/shared/models/gallery-model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private readonly API_URL = `http://api.programator.sk`;

  constructor(private http: HttpClient) {}

  public getGallery(): Observable<GalleryModel[]> {
    return this.http
      .get<GalleriesModel>(`${this.API_URL}/gallery`)
      .pipe(map((data: GalleriesModel) => data.galleries));
  }

  public getCategory(category: string): Observable<ImagesDTO[]> {
    return this.http
      .get<GalleryModel>(`${this.API_URL}/gallery/${category}`)
      .pipe(map((data: GalleryModel) => data.images as ImagesDTO[]));
  }

  public createCategory(dto: CreateCategoryDTO) {
    return this.http.post(`${this.API_URL}/gallery`, dto);
  }

  public uploadFile(formData: File[], category: string) {
    let formDatas = new FormData();
    formData.forEach((file, i) => {
      formDatas.append('image' + i, formData[i]);
    });
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data; boundary=--boundary');
    return this.http.post(`${this.API_URL}/gallery/${category}`, formDatas, {
      headers: headers,
    });
  }
}
