import { ImagesDTO } from './ImagesDTO';


export interface galleryModel {
  path: string,
  image: Array<ImagesDTO>;
  name: string
}
