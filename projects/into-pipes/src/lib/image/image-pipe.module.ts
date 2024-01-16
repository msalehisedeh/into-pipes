import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageComponent } from './image.component';
import { ImagePipe } from './image.pipe';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [ImageComponent, ImagePipe],
  exports: [ImageComponent, ImagePipe],
  entryComponents: [ImageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ImageIntoPipeModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: ImageIntoPipeModule,
      providers: [ImagePipe]
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('image', ImageComponent);
    pool.registerPipeTransformation('image', ImagePipe.transformationMethod());
  }
}
