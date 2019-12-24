import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderComponent } from './slider.component';
import { ComponentPool } from '../common/component.pool';
import { CommonPipesModule } from '../common/common-pipes.module';

@NgModule({
  imports: [CommonModule, CommonPipesModule.forRoot()],
  declarations: [SliderComponent],
  exports: [SliderComponent],
  entryComponents: [SliderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SliderIntoPipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SliderIntoPipeModule,
      providers: []
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('slider', SliderComponent);
  }
}
