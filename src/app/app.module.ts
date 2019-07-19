import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

let config = {
  apiKey: "AIzaSyB_Xc524j1VkfvaXGHW94cWA_Z_59oGDik",
  authDomain: "scribe-8a74b.firebaseapp.com",
  databaseURL: "https://scribe-8a74b.firebaseio.com",
  projectId: "scribe-8a74b",
  storageBucket: "scribe-8a74b.appspot.com",
  messagingSenderId: "710812006946"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
