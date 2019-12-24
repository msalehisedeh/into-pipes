import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntoPipeModule } from './into-pipes/pipe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IntoPipeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
