import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpSimpleTimelineComponent } from './exp-simple-timeline.component';

describe('ExpSimpleTimelineComponent', () => {
  let component: ExpSimpleTimelineComponent;
  let fixture: ComponentFixture<ExpSimpleTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpSimpleTimelineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpSimpleTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
