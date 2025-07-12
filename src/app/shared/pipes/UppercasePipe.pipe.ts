import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperPipe',
  standalone: true,
})
export class UppercasePipe implements PipeTransform {
  transform(value: string) {
    return value.toUpperCase();
  }
}
