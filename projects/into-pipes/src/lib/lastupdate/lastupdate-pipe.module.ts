import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastUpdateComponent } from './lastupdate.component';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [LastUpdateComponent],
  exports: [LastUpdateComponent],
  entryComponents: [LastUpdateComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LastUpdateIntoPipeModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: LastUpdateIntoPipeModule,
      providers: []
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('lastupdate', LastUpdateComponent);
  }
}
