import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputGroupComponent } from './input-group.component';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [InputGroupComponent],
  exports: [InputGroupComponent],
  entryComponents: [InputGroupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class InputGroupIntoPipeModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: InputGroupIntoPipeModule,
      providers: []
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('inputgroup', InputGroupComponent);
  }
}
