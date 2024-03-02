import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggerComponent } from './toggler.component';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [ToggerComponent],
  exports: [ToggerComponent],
  entryComponents: [ToggerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ToggerIntoPipeModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: ToggerIntoPipeModule,
      providers: []
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('toggler', ToggerComponent);
  }
}
