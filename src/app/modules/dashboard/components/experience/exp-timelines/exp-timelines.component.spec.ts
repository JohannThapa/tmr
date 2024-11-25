import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpTimelinesComponent } from './exp-timelines.component';

describe('ExpTimelinesComponent', () => {
  let component: ExpTimelinesComponent;
  let fixture: ComponentFixture<ExpTimelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpTimelinesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpTimelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
