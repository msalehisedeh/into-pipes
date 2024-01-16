import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { IntoPipeModule } from '@sedeh/into-pipes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IntoPipeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
