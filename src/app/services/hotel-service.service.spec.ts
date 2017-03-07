import { TestBed, inject } from '@angular/core/testing';

import { HotelServiceService } from './hotel-service.service';

describe('HotelServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelServiceService]
    });
  });

  it('should ...', inject([HotelServiceService], (service: HotelServiceService) => {
    expect(service).toBeTruthy();
  }));
});
