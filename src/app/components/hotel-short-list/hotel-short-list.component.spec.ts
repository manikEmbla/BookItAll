import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelShortListComponent } from './hotel-short-list.component';

describe('HotelShortListComponent', () => {
  let component: HotelShortListComponent;
  let fixture: ComponentFixture<HotelShortListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelShortListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelShortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
