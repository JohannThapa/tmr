import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTransactionTableComponent } from './crypto-transaction-table.component';

describe('CryptoTransactionTableComponent', () => {
  let component: CryptoTransactionTableComponent;
  let fixture: ComponentFixture<CryptoTransactionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoTransactionTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoTransactionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
