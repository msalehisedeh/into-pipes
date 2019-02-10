import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneComponent } from './phone.component';
import { PhonePipe } from './phone.pipe';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [PhoneComponent, PhonePipe],
  exports: [PhoneComponent, PhonePipe],
  entryComponents: [PhoneComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PhoneIntoPipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PhoneIntoPipeModule,
      providers: [PhonePipe]
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('phone', PhoneComponent);
    pool.registerPipeTransformation('phone', PhonePipe.transformationMethod());
  }
}
