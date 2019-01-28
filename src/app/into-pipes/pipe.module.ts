import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from './components/common-components.module';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule
  ],
  declarations: [
  ],
  exports: [
    CommonComponentsModule
  ],
  entryComponents: [
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class IntoPipeModule {}
