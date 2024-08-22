import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinChartCardComponent } from './bitcoin-chart-card.component';

describe('BitcoinChartCardComponent', () => {
  let component: BitcoinChartCardComponent;
  let fixture: ComponentFixture<BitcoinChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitcoinChartCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitcoinChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
