import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToLocaleStringPipe } from './to-locale-string.pipe';

@NgModule({
  declarations: [ToLocaleStringPipe],
  imports: [CommonModule],
  exports: [ToLocaleStringPipe],
})
export class PipesModule {}
