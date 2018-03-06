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

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InToPipe,
    ImagePipe,
    LinkPipe,
    MaskPipe,
    MapPipe,
    PrependPipe,
    AppendPipe,
    WrapPipe
  ],
  exports: [
    InToPipe,
    ImagePipe,
    LinkPipe,
    MaskPipe,
    MapPipe,
    PrependPipe,
    AppendPipe,
    WrapPipe
  ],
  entryComponents: [
  ],
  providers: [
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
    WrapPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class IntoPipeModule {}
