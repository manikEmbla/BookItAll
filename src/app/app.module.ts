import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { AppRoutingModule } from './app.routing.module';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CarouselModule, DropdownModule, AlertModule } from 'ng2-bootstrap';
import {HotelService  } from './services/hotel.service';
import { HotelShortDetailComponent } from './components/hotel-short-detail/hotel-short-detail.component';
import { SlideShowComponent } from './shared/slide-show/slide-show.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { FlightsComponent } from './components/flights/flights.component';
import { FlightShortDetailComponent } from './components/flight-short-detail/flight-short-detail.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { TaxisComponent } from './components/taxis/taxis.component';
import { TaxiDetailsComponent } from './components/taxi-details/taxi-details.component';
import { TaxiListComponent } from './components/taxi-list/taxi-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    HotelListComponent,
    SidebarComponent,
    HotelShortDetailComponent,
    SlideShowComponent,
    HotelDetailsComponent,
    FlightsComponent,
    FlightShortDetailComponent,
    FlightDetailsComponent,
    GiftsComponent,
    TaxisComponent,
    TaxiDetailsComponent,
    TaxiListComponent,
    ContactComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule,
    AppRoutingModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
