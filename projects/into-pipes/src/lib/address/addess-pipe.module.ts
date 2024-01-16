import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressComponent } from './address.component';
import { AddressPipe } from './address.pipe';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [AddressComponent, AddressPipe],
  exports: [AddressComponent, AddressPipe],
  entryComponents: [AddressComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AddressIntoPipeModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AddressIntoPipeModule,
      providers: [
        AddressPipe
      ]
    }
  }
  constructor(@Inject(ComponentPool) pool: ComponentPool) {
    pool.registerComponent('address', AddressComponent);
    pool.registerPipeTransformation('address', AddressPipe.transformationMethod());
  }
}
