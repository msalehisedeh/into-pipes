import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, SlicePipe, UpperCasePipe, LowerCasePipe } from '@angular/common';

import { InToPipe } from './into.pipe';
import {MaskPipe} from './mask.pipe';
import {MapPipe} from './map.pipe';
import {LinkPipe} from './link.pipe';
import {ImagePipe} from './image.pipe';
import {PrependPipe} from './prepend.pipe';
import {AppendPipe} from './append.pipe';
import {WrapPipe} from './wrap.pipe';
import {EmailPipe} from './email.pipe';
import {RatingPipe} from './rating.pipe';
import {AddressPipe} from './address.pipe';
import {FontPipe} from './font.pipe';
import {ValueOfPipe} from './valueof.pipe';
import {ConditionalPipe} from './conditional.pipe';
import {JoinPipe} from './join.pipe';
import {SanitizeHtmlPipe} from './sanitizeHtml.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    JoinPipe,
    InToPipe,
    ImagePipe,
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
    SanitizeHtmlPipe
  ],
  exports: [
    JoinPipe,
    InToPipe,
    ImagePipe,
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
    SanitizeHtmlPipe
  ],
  entryComponents: [
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
    SanitizeHtmlPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class IntoPipeModule {}
