import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoChartCardComponent } from './crypto-chart-card.component';

describe('CryptoChartCardComponent', () => {
  let component: CryptoChartCardComponent;
  let fixture: ComponentFixture<CryptoChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoChartCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
