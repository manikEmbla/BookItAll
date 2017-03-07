import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Hotel } from '../models/hotel';

@Injectable()
export class HotelService {

  constructor(private http: Http) { }

  getHotels():Observable<Hotel[]>{
    return this.http.get('assets/data/hotels.json').map(res => res.json());
  }

}
