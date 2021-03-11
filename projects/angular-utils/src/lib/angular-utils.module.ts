import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, DirectivesModule, PipesModule],
  exports: [DirectivesModule, PipesModule],
})
export class AngularUtilsModule {}
