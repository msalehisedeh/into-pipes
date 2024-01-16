import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectComponent } from './select.component';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [SelectComponent],
  exports: [SelectComponent],
  entryComponents: [SelectComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SelectIntoPipeModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SelectIntoPipeModule,
      providers: []
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('select', SelectComponent);
  }
}
