import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './routes';
import { MyOwnMaterialModule } from './shared/material';
import { NavbarModule } from './shared/navbar';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage';
import { SecondpageComponent } from './pages/secondpage';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SecondpageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    MyOwnMaterialModule,   // make sure to import after `BrowserModule`
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
