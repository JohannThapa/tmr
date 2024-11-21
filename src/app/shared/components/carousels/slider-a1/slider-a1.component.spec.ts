import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderA1Component } from './slider-a1.component';

describe('SliderA1Component', () => {
  let component: SliderA1Component;
  let fixture: ComponentFixture<SliderA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderA1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(SliderA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
