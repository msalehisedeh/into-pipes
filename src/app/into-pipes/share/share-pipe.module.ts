import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareComponent } from './share.component';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [ShareComponent],
  exports: [ShareComponent],
  entryComponents: [ShareComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ShareIntoPipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShareIntoPipeModule,
      providers: []
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('share', ShareComponent);
  }
}
