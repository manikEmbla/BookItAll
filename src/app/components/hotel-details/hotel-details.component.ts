import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../models/hotel';
import {HotelService  } from '../../services/hotel.service';

@Component({
  selector: 'hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  hotel:Hotel;
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotel = this.hotelService.selectedHotel;
  }

  createNumberRange(){
    var items: number[] =[];
    for(var i =0; i < this.hotel.rating; i++){
      items.push(i);
    }
    return items;
  }

}
