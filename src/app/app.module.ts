import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntoPipeModule } from './into-pipes/pipe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    IntoPipeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
