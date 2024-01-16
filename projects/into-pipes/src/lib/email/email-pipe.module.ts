import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailComponent } from './email.component';
import { EmailPipe } from './email.pipe';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [EmailComponent, EmailPipe],
  exports: [EmailComponent, EmailPipe],
  entryComponents: [EmailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
}) 

export class EmailIntoPipeModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: EmailIntoPipeModule,
      providers: [EmailPipe]
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('email', EmailComponent);
    pool.registerPipeTransformation('email', EmailPipe.transformationMethod());
  }
}
