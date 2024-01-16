import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextComponent } from './text.component';
import { ComponentPool } from '../common/component.pool';
import { CommonPipesModule } from '../common/common-pipes.module';

@NgModule({
  imports: [CommonModule, CommonPipesModule.forRoot()],
  declarations: [TextComponent],
  exports: [TextComponent],
  entryComponents: [TextComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TextIntoPipeModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: TextIntoPipeModule,
      providers: []
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('text', TextComponent);
  }
}
