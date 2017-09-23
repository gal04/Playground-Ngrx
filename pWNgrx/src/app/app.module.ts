import { NgModule }                  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// *************************
// Custom Application imports
// *************************

import { AppRoutingModule }          from './app-routing.module';
import { AppStateModule }            from './state/state.module';

import { AppComponent }              from './views/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
