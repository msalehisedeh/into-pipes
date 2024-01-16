import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './input.component';
import { ComponentPool } from '../common/component.pool';
import { CommonPipesModule } from '../common/common-pipes.module';

@NgModule({
  imports: [CommonModule, CommonPipesModule.forRoot()],
  declarations: [InputComponent],
  exports: [InputComponent],
  entryComponents: [InputComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class InputIntoPipeModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: InputIntoPipeModule,
      providers: []
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('input', InputComponent);
  }
}
