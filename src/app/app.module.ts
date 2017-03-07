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
import { HotelShortListComponent } from './components/hotel-short-list/hotel-short-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    HotelListComponent,
    SidebarComponent,
    HotelShortListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
