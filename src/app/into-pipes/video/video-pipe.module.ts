import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoComponent } from './video.component';
import { VideoPipe } from './video.pipe';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [VideoComponent, VideoPipe],
  exports: [VideoComponent, VideoPipe],
  entryComponents: [VideoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class VideoIntoPipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: VideoIntoPipeModule,
      providers: [VideoPipe]
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('video', VideoComponent);
    pool.registerPipeTransformation('video', VideoPipe.transformationMethod());
  }
}
