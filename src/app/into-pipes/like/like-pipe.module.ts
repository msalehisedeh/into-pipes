import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikeComponent } from './like.component';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [LikeComponent],
  exports: [LikeComponent],
  entryComponents: [LikeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LikeIntoPipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LikeIntoPipeModule,
      providers: []
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('like', LikeComponent);
  }
}
