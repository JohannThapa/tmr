import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiseCardComponent } from './noise-card.component';

describe('NoiseCardComponent', () => {
  let component: NoiseCardComponent;
  let fixture: ComponentFixture<NoiseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoiseCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoiseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
