import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMenuComponent } from './color-menu.component';

describe('ColorMenuComponent', () => {
  let component: ColorMenuComponent;
  let fixture: ComponentFixture<ColorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
