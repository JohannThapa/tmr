import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoTransactionTableItemComponent } from './crypto-transaction-table-item.component';

describe('CryptoTransactionTableItemComponent', () => {
  let component: CryptoTransactionTableItemComponent;
  let fixture: ComponentFixture<CryptoTransactionTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoTransactionTableItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoTransactionTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
