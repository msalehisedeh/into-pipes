import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingComponent } from './rating.component';
import { RatingPipe } from './rating.pipe';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [RatingComponent, RatingPipe],
  exports: [RatingComponent, RatingPipe],
  entryComponents: [RatingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RatingIntoPipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RatingIntoPipeModule,
      providers: [RatingPipe]
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('rating', RatingComponent);
    pool.registerPipeTransformation('rating', RatingPipe.transformationMethod());
  }
}
