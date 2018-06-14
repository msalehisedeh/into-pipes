import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, SlicePipe, UpperCasePipe, LowerCasePipe } from '@angular/common';

import { InToPipe } from './pipes/into.pipe';
import {MaskPipe} from './pipes/mask.pipe';
import {MapPipe} from './pipes/map.pipe';
import {LinkPipe} from './pipes/link.pipe';
import {ImagePipe} from './pipes/image.pipe';
import {VideoPipe} from './pipes/video.pipe';
import {PrependPipe} from './pipes/prepend.pipe';
import {JoinPipe} from './pipes/join.pipe';
import {AppendPipe} from './pipes/append.pipe';
import {WrapPipe} from './pipes/wrap.pipe';
import {EmailPipe} from './pipes/email.pipe';
import {RatingPipe} from './pipes/rating.pipe';
import {AddressPipe} from './pipes/address.pipe';
import {FontPipe} from './pipes/font.pipe';
import {ValueOfPipe} from './pipes/valueof.pipe';
import {ConditionalPipe} from './pipes/conditional.pipe';
import {SanitizeHtmlPipe} from './pipes/sanitizeHtml.pipe';
import {IntoDirective} from './directives/into.directive'
import { ComponentPool } from './injectables/component.pool';

import { SpanComponent } from './components/span.component';
import { AddressComponent } from './components/address.component';
import { EmailComponent } from './components/email.component';
import { FontComponent } from './components/font.component';
import { ImageComponent } from './components/image.component';
import { VideoComponent } from './components/video.component';
import { JsonComponent } from './components/json.component';
import { LinkComponent } from './components/link.component';
import { RatingComponent } from './components/rating.component';
import { InputComponent } from './components/input.component';
import { CheckboxComponent } from './components/checkbox.component';
import { SelectComponent } from './components/select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddressComponent,
    EmailComponent,
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
    JoinPipe,
    InToPipe,
    ImagePipe,
    VideoPipe,
    LinkPipe,
    MaskPipe,
    MapPipe,
    PrependPipe,
    AppendPipe,
    WrapPipe,
    ValueOfPipe,
    EmailPipe,
    RatingPipe,
    FontPipe,
    ConditionalPipe,
    AddressPipe,
    SanitizeHtmlPipe,
    IntoDirective
  ],
  exports: [
    JoinPipe,
    InToPipe,
    ImagePipe,
    VideoPipe,
    LinkPipe,
    MaskPipe,
    MapPipe,
    PrependPipe,
    AppendPipe,
    WrapPipe,
    ValueOfPipe,
    EmailPipe,
    RatingPipe,
    FontPipe,
    ConditionalPipe,
    AddressPipe,
    SanitizeHtmlPipe,
    IntoDirective
  ],
  entryComponents: [
    AddressComponent,
    EmailComponent,
    FontComponent,
    ImageComponent,
    VideoComponent,
    JsonComponent,
    LinkComponent,
    InputComponent,
    CheckboxComponent,
    RatingComponent,
    SelectComponent,
    SpanComponent
  ],
  providers: [
    JoinPipe,
    InToPipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
    SlicePipe,
    UpperCasePipe,
    LowerCasePipe,
    ImagePipe,
    VideoPipe,
    LinkPipe,
    MaskPipe,
    MapPipe,
    PrependPipe,
    AppendPipe,
    EmailPipe,
    RatingPipe,
    AddressPipe,
    FontPipe,
    ConditionalPipe,
    WrapPipe,
    ValueOfPipe,
    SanitizeHtmlPipe,
    ComponentPool
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class IntoPipeModule {}
