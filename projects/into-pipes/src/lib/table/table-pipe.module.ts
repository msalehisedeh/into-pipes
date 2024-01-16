import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table.component';
import { TablePipe } from './table.pipe';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [TableComponent, TablePipe],
  exports: [TableComponent, TablePipe],
  entryComponents: [TableComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TableIntoPipeModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: TableIntoPipeModule,
      providers: [
        TablePipe
      ]
    }
  }
  constructor(@Inject(ComponentPool) pool: ComponentPool) {
    pool.registerComponent('table', TableComponent);
    pool.registerPipeTransformation('table', TablePipe.transformationMethod());
  }
}
