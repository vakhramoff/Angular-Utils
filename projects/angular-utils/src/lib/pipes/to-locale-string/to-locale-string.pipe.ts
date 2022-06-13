import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLocaleString',
  standalone: true,
})
export class ToLocaleStringPipe<T> implements PipeTransform {
  transform<T>(value: T): string | T {
    return value?.toLocaleString() ?? value;
  }
}
