import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLocaleString',
})
export class ToLocaleStringPipe implements PipeTransform {
  transform(value: any): string | undefined {
    return value?.toLocaleString();
  }
}
