// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KpiComponent } from './gooddata-kpi.component';

@NgModule({
  declarations: [
    AppComponent,
    KpiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
