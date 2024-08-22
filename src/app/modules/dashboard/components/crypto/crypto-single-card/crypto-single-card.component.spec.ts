import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoSingleCardComponent } from './crypto-single-card.component';

describe('CryptoSingleCardComponent', () => {
  let component: CryptoSingleCardComponent;
  let fixture: ComponentFixture<CryptoSingleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoSingleCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoSingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
