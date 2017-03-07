import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelShortDetailComponent } from './hotel-short-detail.component';

describe('HotelShortDetailComponent', () => {
  let component: HotelShortDetailComponent;
  let fixture: ComponentFixture<HotelShortDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelShortDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelShortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
