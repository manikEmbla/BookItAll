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

	imgUrl: Array<any> = [
		`assets/img/slider1.jpg`,
		`assets/img/slider2.jpg`,
		`assets/img/slider3.jpg`,
		`assets/img/slider0.jpg`
	];

	hotels: Hotel[];

  ngOnInit() {
    for (let i = 0; i < 4; i++) {
			this.addSlide();
		}

		this.hotelService.getHotels().subscribe(
			hotels => {
				this.hotels = hotels;
			}
		);
  }


}
