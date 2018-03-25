import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, SlicePipe, UpperCasePipe, LowerCasePipe } from '@angular/common';

import { InToPipe } from './pipes/into.pipe';
import {MaskPipe} from './pipes/mask.pipe';
import {MapPipe} from './pipes/map.pipe';
import {LinkPipe} from './pipes/link.pipe';
import {ImagePipe} from './pipes/image.pipe';
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

import { AddressComponent } from './components/address.component';
import { EmailComponent } from './components/email.component';
import { FontComponent } from './components/font.component';
import { ImageComponent } from './components/image.component';
import { JsonComponent } from './components/json.component';
import { LinkComponent } from './components/link.component';
import { RatingComponent } from './components/rating.component';
import { InputComponent } from './components/input.component';
import { CheckboxComponent } from './components/checkbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddressComponent,
    EmailComponent,
    FontComponent,
    ImageComponent,
    JsonComponent,
    LinkComponent,
    RatingComponent,
    InputComponent,
    CheckboxComponent,
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
    SanitizeHtmlPipe,
    IntoDirective
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
    SanitizeHtmlPipe,
    IntoDirective
  ],
  entryComponents: [
    AddressComponent,
    EmailComponent,
    FontComponent,
    ImageComponent,
    JsonComponent,
    LinkComponent,
    InputComponent,
    CheckboxComponent,
    RatingComponent
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
    SanitizeHtmlPipe,
    IntoDirective,
    ComponentPool
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class IntoPipeModule {}
