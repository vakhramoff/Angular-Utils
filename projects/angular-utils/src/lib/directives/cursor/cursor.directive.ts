import { Directive, HostBinding, Input } from '@angular/core';
import { TCursorType } from './cursor.type';

@Directive({
  selector: '[cursor]',
  standalone: true,
})
export class CursorDirective {
  @Input()
  cursor?: TCursorType = 'auto';

  @HostBinding('style.cursor')
  get currentCursor() {
    return this.cursor;
  }
}
