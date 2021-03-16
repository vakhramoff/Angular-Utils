import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TCursorType } from './cursor.type';

@Directive({
  selector: '[cursor]',
})
export class CursorDirective implements OnChanges {
  @Input() cursor?: TCursorType = 'auto';

  constructor(private elementRef: ElementRef) {
    this._setCursor(this.cursor);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('cursor' in changes) {
      this._setCursor(this.cursor);
    }
  }

  private _setCursor(cursor: TCursorType) {
    this.elementRef.nativeElement.style.cursor = cursor;
  }
}
