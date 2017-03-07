import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hotel-short-list',
  templateUrl: './hotel-short-list.component.html',
  styleUrls: ['./hotel-short-list.component.css']
})
export class HotelShortListComponent implements OnInit {

  constructor() { }

  @Input()

  ngOnInit() {
  }

}
