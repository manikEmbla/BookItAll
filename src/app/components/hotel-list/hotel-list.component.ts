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

  myInterval: number = 5000;
	index: number = 0;
	slides: Array<any> = [];
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

/* Carousel */
	addSlide() {
		let i = this.slides.length;
		this.slides.push({
			image: this.imgUrl[i],
			text: `${['A Winter getaway ', 'An autom getaway ', 'Free by a lake ', 'Luxury '][this.slides.length % 4]}
      			${['Ice skating and more..', 'enjoy a vacation in warm air', 'A quite vacation', 'Spend your vacation at a luxury hotel'][this.slides.length % 4]}`
		});
	}
	/* END */
}
