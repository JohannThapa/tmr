import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdxHeaderComponent } from './idx-header.component';

describe('IdxHeaderComponent', () => {
  let component: IdxHeaderComponent;
  let fixture: ComponentFixture<IdxHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdxHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
