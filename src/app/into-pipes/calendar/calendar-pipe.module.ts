import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './calendar.component';
import { ComponentPool } from '../common/component.pool';

@NgModule({
  imports: [CommonModule],
  declarations: [CalendarComponent],
  exports: [CalendarComponent],
  entryComponents: [CalendarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CalendarIntoPipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CalendarIntoPipeModule,
      providers: [
      ]
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerComponent('calendar', CalendarComponent);
  }
}
