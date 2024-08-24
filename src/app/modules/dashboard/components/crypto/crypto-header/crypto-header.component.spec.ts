import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoHeaderComponent } from './crypto-header.component';

describe('CryptoHeaderComponent', () => {
  let component: CryptoHeaderComponent;
  let fixture: ComponentFixture<CryptoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
