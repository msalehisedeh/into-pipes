import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntoDirective } from '../directives/into.directive'
import { ComponentPool } from '../injectables/component.pool';

import { CommonPipesModule } from '../pipes/common-pipes.module';

import { InputGroupComponent } from './input-group.component';
import { SpanComponent } from './span.component';
import { AddressComponent } from './address.component';
import { EmailComponent } from './email.component';
import { PhoneComponent } from './phone.component';
import { FontComponent } from './font.component';
import { ImageComponent } from './image.component';
import { VideoComponent } from './video.component';
import { JsonComponent } from './json.component';
import { LinkComponent } from './link.component';
import { LikeComponent } from './like.component';
import { LastUpdateComponent } from './lastupdate.component';
import { RatingComponent } from './rating.component';
import { InputComponent } from './input.component';
import { CheckboxComponent } from './checkbox.component';
import { SelectComponent } from './select.component';
import { ShareComponent } from './share.component';
import { CalendarComponent } from './calendar.component';

@NgModule({
  imports: [
    CommonModule,
    CommonPipesModule
  ],
  declarations: [
    AddressComponent,
    EmailComponent,
    PhoneComponent,
    FontComponent,
    ImageComponent,
    VideoComponent,
    JsonComponent,
    LinkComponent,
    RatingComponent,
    InputComponent,
    CheckboxComponent,
    SelectComponent,
    SpanComponent,
    ShareComponent,
    LikeComponent,
    CalendarComponent,
    LastUpdateComponent,
    InputGroupComponent,
    IntoDirective
  ],
  exports: [
    CommonPipesModule,
    IntoDirective,
    AddressComponent,
    EmailComponent,
    PhoneComponent,
    FontComponent,
    ImageComponent,
    VideoComponent,
    JsonComponent,
    LinkComponent,
    InputComponent,
    CheckboxComponent,
    RatingComponent,
    SelectComponent,
    SpanComponent,
    ShareComponent,
    LikeComponent,
    CalendarComponent,
    LastUpdateComponent,
    InputGroupComponent
  ],
  entryComponents: [
    AddressComponent,
    EmailComponent,
    PhoneComponent,
    FontComponent,
    ImageComponent,
    VideoComponent,
    JsonComponent,
    LinkComponent,
    InputComponent,
    CheckboxComponent,
    RatingComponent,
    SelectComponent,
    SpanComponent,
    ShareComponent,
    LikeComponent,
    CalendarComponent,
    LastUpdateComponent,
    InputGroupComponent
  ],
  providers: [
    ComponentPool
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CommonComponentsModule {}
