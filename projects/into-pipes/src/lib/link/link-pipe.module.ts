import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkComponent } from './link.component';
import { LinkPipe } from './link.pipe';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [LinkComponent,LinkPipe],
  exports: [LinkComponent,LinkPipe],
  entryComponents: [LinkComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LinkIntoPipeModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: LinkIntoPipeModule,
      providers: [LinkPipe]
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('link', LinkComponent);
    pool.registerPipeTransformation('link', LinkPipe.transformationMethod());
  }
}
