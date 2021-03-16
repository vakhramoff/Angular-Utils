import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorDirective } from './cursor/cursor.directive';
import { DebounceTimeDirective } from './debounce-time/debounce-time.directive';

@NgModule({
  declarations: [CursorDirective, DebounceTimeDirective],
  imports: [CommonModule],
  exports: [CursorDirective, DebounceTimeDirective],
})
export class DirectivesModule {}
