import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomReactComponentWrapperComponent } from '../CustomReactComponentWrapper';

@NgModule({
  declarations: [
    AppComponent,
    CustomReactComponentWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
