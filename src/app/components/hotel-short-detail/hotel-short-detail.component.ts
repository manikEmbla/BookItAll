import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'hotel-short-detail',
  templateUrl: './hotel-short-detail.component.html',
  styleUrls: ['./hotel-short-detail.component.css']
})
export class HotelShortDetailComponent implements OnInit {

  constructor() { }

  @Input() hotel: Hotel;

  ngOnInit() {
  }

}
