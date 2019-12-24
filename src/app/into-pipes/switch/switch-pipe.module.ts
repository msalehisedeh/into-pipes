import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchComponent } from './switch.component';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [SwitchComponent],
  exports: [SwitchComponent],
  entryComponents: [SwitchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SwitchIntoPipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SwitchIntoPipeModule,
      providers: [
      ]
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('switch', SwitchComponent);
  }
}
