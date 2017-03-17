import { TestBed, inject } from '@angular/core/testing';

import { TaxisService } from './taxis.service';

describe('TaxisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxisService]
    });
  });

  it('should ...', inject([TaxisService], (service: TaxisService) => {
    expect(service).toBeTruthy();
  }));
});
