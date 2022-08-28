import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';;
import { map, Observable } from 'rxjs';
import { createCategoryDTO } from 'src/app/shared/models/createCategoryDTO';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private readonly API_URL = `http://api.programator.sk/`

  constructor(private http: HttpClient) { }

  public getGallery(): Observable<any[]> {
    return this.http.get<any>(`${this.API_URL}/gallery`).pipe(map(data => data.galleries))
  }

  public getCategory(category: string): Observable<any[]> {
    return this.http.get<any>(`${this.API_URL}/gallery/${category}`).pipe(map(data => data.images))
  }

  // public createCategory(category: string, dto: createCategoryDTO) {
  //   return this.http.post(`${this.API_URL}/gallery/${category}`, dto)
  // }
}
