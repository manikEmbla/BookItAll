import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {

  constructor() { }

  	imgUrl: Array<any> = [
		`assets/img/slider1.jpg`,
		`assets/img/slider2.jpg`,
		`assets/img/slider3.jpg`,
		`assets/img/slider0.jpg`
	];

  myInterval: number = 1000;
	index: number = 0;
  slides:Array<any>=[];

  ngOnInit() {
    for (let i = 0; i < 4; i++) {
			this.addSlide();
		}

  }

  /* Carousel */
	addSlide() {
		let i = this.slides.length;
		this.slides.push({
			image: this.imgUrl[i],
			text: `${['Ice skating and more..', 'enjoy a vacation in warm air', 'A quite vacation', 'Spend your vacation at a luxury hotel'][this.slides.length % 4]}`,
			caption:	`${['A Winter getaway ', 'An autom getaway ', 'Free by a lake ', 'Luxury '][this.slides.length % 4]}`			
		});
	}
	/* END */

}
