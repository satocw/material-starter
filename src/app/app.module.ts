import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnMaterialModule } from './shared/material/my-own-material.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MyOwnMaterialModule   // make sure to import after `BrowserModule`
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
