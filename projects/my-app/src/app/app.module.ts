import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ExternalModule } from 'projects/my-app/external/external.module';
import { OneComponent } from './one/one.component';
import { TowComponent } from './tow/tow.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    OneComponent,
    TowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExternalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
