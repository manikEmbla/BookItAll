import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiDetailsComponent } from './taxi-details.component';

describe('TaxiDetailsComponent', () => {
  let component: TaxiDetailsComponent;
  let fixture: ComponentFixture<TaxiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
