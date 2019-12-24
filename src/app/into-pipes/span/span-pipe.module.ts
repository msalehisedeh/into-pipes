import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpanComponent } from './span.component';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [SpanComponent],
  exports: [SpanComponent],
  entryComponents: [SpanComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SpanIntoPipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SpanIntoPipeModule,
      providers: []
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('span', SpanComponent);
  }
}
