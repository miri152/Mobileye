import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpotTableComponent } from './parking-spot-table.component';

describe('ParkingSpotTableComponent', () => {
  let component: ParkingSpotTableComponent;
  let fixture: ComponentFixture<ParkingSpotTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingSpotTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingSpotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
