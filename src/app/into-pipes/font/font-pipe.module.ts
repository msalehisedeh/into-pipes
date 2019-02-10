import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontComponent } from './font.component';
import { FontPipe } from './font.pipe';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [FontComponent, FontPipe],
  exports: [FontComponent, FontPipe],
  entryComponents: [FontComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FontIntoPipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FontIntoPipeModule,
      providers: [FontPipe]
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('font', FontComponent);
    pool.registerPipeTransformation('font', FontPipe.transformationMethod());
  }
}
