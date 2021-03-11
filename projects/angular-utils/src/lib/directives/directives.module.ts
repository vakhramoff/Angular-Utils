import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursorDirective } from './cursor/cursor.directive';

@NgModule({
  declarations: [CursorDirective],
  imports: [CommonModule],
  exports: [CursorDirective],
})
export class DirectivesModule {}
