import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeadlineModule } from './components/headline/headline.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeadlineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
