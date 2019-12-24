import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudioComponent } from './audio.component';
import { AudioPipe } from './audio.pipe';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [AudioComponent, AudioPipe],
  exports: [AudioComponent, AudioPipe],
  entryComponents: [AudioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AudioIntoPipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AudioIntoPipeModule,
      providers: [
        AudioPipe
      ]
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('audio', AudioComponent);
    pool.registerPipeTransformation('audio', AudioPipe.transformationMethod());
  }
}
