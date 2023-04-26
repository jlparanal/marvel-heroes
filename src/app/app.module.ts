import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListsComponent } from './Component/hero-lists/hero-lists.component';

import { FormsModule } from '@angular/forms';
import { ItemOutputComponent } from './item-output/item-output/item-output.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroListsComponent,
    ItemOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
