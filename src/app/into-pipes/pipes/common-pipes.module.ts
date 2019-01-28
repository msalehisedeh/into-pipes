import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { 
    CommonModule,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
    SlicePipe,
    UpperCasePipe,
    LowerCasePipe
} from '@angular/common';

import {AddressPipe} from './address.pipe';
import {AppendPipe} from './append.pipe';
import {ConditionalPipe} from './conditional.pipe';
import {EmailPipe} from './email.pipe';
import {FontPipe} from './font.pipe';
import {ImagePipe} from './image.pipe';
import { InToPipe } from './into.pipe';
import {JoinPipe} from './join.pipe';
import {LinkPipe} from './link.pipe';
import {MapPipe} from './map.pipe';
import {MaskPipe} from './mask.pipe';
import {PhonePipe} from './phone.pipe';
import {PrependPipe} from './prepend.pipe';
import {RatingPipe} from './rating.pipe';
import {SanitizeHtmlPipe} from './sanitizeHtml.pipe';
import {ValueOfPipe} from './valueof.pipe';
import {VideoPipe} from './video.pipe';
import {WrapPipe} from './wrap.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddressPipe,
    AppendPipe,
    ConditionalPipe,
    EmailPipe,
    FontPipe,
    ImagePipe,
    InToPipe,
    JoinPipe,
    LinkPipe,
    MapPipe,
    MaskPipe,
    PhonePipe,
    PrependPipe,
    RatingPipe,
    SanitizeHtmlPipe,
    ValueOfPipe,
    VideoPipe,
    WrapPipe
  ],
  exports: [
    AddressPipe,
    AppendPipe,
    ConditionalPipe,
    EmailPipe,
    FontPipe,
    ImagePipe,
    InToPipe,
    JoinPipe,
    LinkPipe,
    MapPipe,
    MaskPipe,
    PhonePipe,
    PrependPipe,
    RatingPipe,
    SanitizeHtmlPipe,
    ValueOfPipe,
    VideoPipe,
    WrapPipe
  ],
  entryComponents: [
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
    SlicePipe,
    UpperCasePipe,
    LowerCasePipe,
    AddressPipe,
    AppendPipe,
    ConditionalPipe,
    EmailPipe,
    FontPipe,
    ImagePipe,
    InToPipe,
    JoinPipe,
    LinkPipe,
    MapPipe,
    MaskPipe,
    PhonePipe,
    PrependPipe,
    RatingPipe,
    SanitizeHtmlPipe,
    ValueOfPipe,
    VideoPipe,
    WrapPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommonPipesModule {}
