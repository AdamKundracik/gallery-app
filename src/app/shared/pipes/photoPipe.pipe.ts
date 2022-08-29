import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photoPipe'
})
export class PhotoPipe implements PipeTransform {

  transform(number: number): string {
    if (number === 0 || number == null) {
      return "0 fotiek"
    }
    if (number === 1) {
      return "1 fotka"
    }
    if (number > 1 && number < 5) {
      return `${number} fotky`
    }
    return `${number} fotiek`

  }
}
