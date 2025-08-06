import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpMobileTimelinesComponent } from './exp-mobile-timelines.component';

describe('ExpMobileTimelinesComponent', () => {
  let component: ExpMobileTimelinesComponent;
  let fixture: ComponentFixture<ExpMobileTimelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpMobileTimelinesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpMobileTimelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
