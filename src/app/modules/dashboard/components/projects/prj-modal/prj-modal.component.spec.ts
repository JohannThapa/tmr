import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjModalComponent } from './prj-modal.component';

describe('PrjModalComponent', () => {
  let component: PrjModalComponent;
  let fixture: ComponentFixture<PrjModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrjModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrjModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
