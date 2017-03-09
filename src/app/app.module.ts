import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { routing } from './app.routes';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CarouselModule, DropdownModule, AlertModule } from 'ng2-bootstrap';
import {HotelService  } from './services/hotel.service';
import { HotelShortDetailComponent } from './components/hotel-short-detail/hotel-short-detail.component';
import { SlideShowComponent } from './shared/slide-show/slide-show.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    HotelListComponent,
    SidebarComponent,
    HotelShortDetailComponent,
    SlideShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CarouselModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
