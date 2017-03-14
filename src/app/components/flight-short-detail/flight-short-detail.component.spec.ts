import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightShortDetailComponent } from './flight-short-detail.component';

describe('FlightShortDetailComponent', () => {
  let component: FlightShortDetailComponent;
  let fixture: ComponentFixture<FlightShortDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightShortDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightShortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
