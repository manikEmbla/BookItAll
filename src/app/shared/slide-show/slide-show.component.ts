import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {

  constructor() { }

  myInterval: number = 1000;
	index: number = 0;
	@Input() images: Array<string> = [];

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
			text: `${['A Winter getaway ', 'An autom getaway ', 'Free by a lake ', 'Luxury '][this.slides.length % 4]}
      			${['Ice skating and more..', 'enjoy a vacation in warm air', 'A quite vacation', 'Spend your vacation at a luxury hotel'][this.slides.length % 4]}`
		});
	}
	/* END */

}

export class Slide{
  image:string;
  title:string;
  description:string;
}
