import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdxMobileComponent } from './idx-mobile.component';

describe('IdxMobileComponent', () => {
  let component: IdxMobileComponent;
  let fixture: ComponentFixture<IdxMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdxMobileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IdxMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
