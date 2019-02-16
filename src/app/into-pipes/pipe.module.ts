import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPipesModule } from './common/common-pipes.module';

import { AddressIntoPipeModule } from './address/addess-pipe.module';
import { AudioIntoPipeModule } from './audio/audio-pipe.module';
import { CalendarIntoPipeModule } from './calendar/calendar-pipe.module';
import { CheckboxIntoPipeModule } from './checkbox/checkbox-pipe.module';
import { EmailIntoPipeModule } from './email/email-pipe.module';
import { FontIntoPipeModule } from './font/font-pipe.module';
import { ImageIntoPipeModule } from './image/image-pipe.module';
import { InputIntoPipeModule } from './input/input-pipe.module';
import { InputGroupIntoPipeModule } from './inputgroup/inputgroup-pipe.module';
import { JsonIntoPipeModule } from './json/json-pipe.module';
import { LastUpdateIntoPipeModule } from './lastupdate/lastupdate-pipe.module';
import { LikeIntoPipeModule } from './like/like-pipe.module';
import { LinkIntoPipeModule } from './link/link-pipe.module';
import { PhoneIntoPipeModule } from './phone/phone-pipe.module';
import { RatingIntoPipeModule } from './rating/rating-pipe.module';
import { NoticeIntoPipeModule } from './notice/notice-pipe.module';
import { SelectIntoPipeModule } from './select/select-pipe.module';
import { ShareIntoPipeModule } from './share/share-pipe.module';
import { SpanIntoPipeModule } from './span/span-pipe.module';
import { TableIntoPipeModule } from './table/table-pipe.module';
import { TextIntoPipeModule } from './text/text-pipe.module';
import { VideoIntoPipeModule } from './video/video-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    CommonPipesModule.forRoot(),
    AddressIntoPipeModule.forRoot(),
    AudioIntoPipeModule.forRoot(),
    CalendarIntoPipeModule.forRoot(),
    CheckboxIntoPipeModule.forRoot(),
    EmailIntoPipeModule.forRoot(),
    FontIntoPipeModule.forRoot(),
    ImageIntoPipeModule.forRoot(),
    InputIntoPipeModule.forRoot(),
    InputGroupIntoPipeModule.forRoot(),
    JsonIntoPipeModule.forRoot(),
    LastUpdateIntoPipeModule.forRoot(),
    LikeIntoPipeModule.forRoot(),
    LinkIntoPipeModule.forRoot(),
    PhoneIntoPipeModule.forRoot(),
    RatingIntoPipeModule.forRoot(),
    NoticeIntoPipeModule.forRoot(),
    SelectIntoPipeModule.forRoot(),
    ShareIntoPipeModule.forRoot(),
    SpanIntoPipeModule.forRoot(),
    TableIntoPipeModule.forRoot(),
    TextIntoPipeModule.forRoot(),
    VideoIntoPipeModule.forRoot()
  ],
  declarations: [],
  exports: [
    CommonPipesModule,
    AddressIntoPipeModule,
    AudioIntoPipeModule,
    CalendarIntoPipeModule,
    CheckboxIntoPipeModule,
    EmailIntoPipeModule,
    FontIntoPipeModule,
    ImageIntoPipeModule,
    InputIntoPipeModule,
    InputGroupIntoPipeModule,
    JsonIntoPipeModule,
    LastUpdateIntoPipeModule,
    LikeIntoPipeModule,
    LinkIntoPipeModule,
    PhoneIntoPipeModule,
    RatingIntoPipeModule,
    NoticeIntoPipeModule,
    SelectIntoPipeModule,
    ShareIntoPipeModule,
    SpanIntoPipeModule,
    TableIntoPipeModule,
    TableIntoPipeModule,
    TextIntoPipeModule,
    VideoIntoPipeModule
  ],
  entryComponents: [],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class IntoPipeModule {
}
