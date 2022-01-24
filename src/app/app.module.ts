import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductCarouselComponent } from './common/product-carousel/product-carousel.component';
import { Cat03Component } from './page/cat03/cat03.component';
import { Cat04Component } from './page/cat04/cat04.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductCardComponent,
    ProductCarouselComponent,
    Cat03Component,
    Cat04Component,
    ProductListComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
