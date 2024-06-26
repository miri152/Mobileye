import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPakingSpotDialogComponent } from './select-paking-spot-dialog.component';

describe('SelectPakingSpotDialogComponent', () => {
  let component: SelectPakingSpotDialogComponent;
  let fixture: ComponentFixture<SelectPakingSpotDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPakingSpotDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPakingSpotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
