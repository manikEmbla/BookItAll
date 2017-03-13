import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  constructor(private hotelService: HotelService) { }



	hotels: Hotel[];

  ngOnInit() {
    
		this.hotelService.getHotels().subscribe(
			hotels => {
				this.hotels = hotels;
			}
		);
  }


}
