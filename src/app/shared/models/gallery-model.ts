import { ImagesDTO } from './ImagesDTO';


export interface GalleryModel {
  path: string;
  images?: ImagesDTO[];
  image?: ImagesDTO;
  name: string;
}
