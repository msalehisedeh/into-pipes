import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeComponent } from './notice.component';
import { NoticePipe } from './notice.pipe';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [NoticeComponent, NoticePipe],
  exports: [NoticeComponent, NoticePipe],
  entryComponents: [NoticeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class NoticeIntoPipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NoticeIntoPipeModule,
      providers: [NoticePipe]
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('notice', NoticeComponent);
    pool.registerPipeTransformation('notice', NoticePipe.transformationMethod());
  }
}
