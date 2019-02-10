import { NgModule, ModuleWithProviders , Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonComponent } from './json.component';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [JsonComponent],
  exports: [JsonComponent],
  entryComponents: [JsonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class JsonIntoPipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: JsonIntoPipeModule,
      providers: []
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('json', JsonComponent);
  }
}
