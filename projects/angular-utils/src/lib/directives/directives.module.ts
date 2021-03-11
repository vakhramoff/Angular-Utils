import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorDirective } from './cursor/cursor.directive';

@NgModule({
  declarations: [CursorDirective],
  imports: [CommonModule],
  exports: [CursorDirective],
})
export class DirectivesModule {}
