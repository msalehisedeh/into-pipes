import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxComponent } from './checkbox.component';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent],
  entryComponents: [CheckboxComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CheckboxIntoPipeModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CheckboxIntoPipeModule,
      providers: [
      ]
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('checkbox', CheckboxComponent);
  }
}
