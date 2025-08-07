import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipLoaderComponent } from './chip-loader.component';

describe('ChipLoaderComponent', () => {
  let component: ChipLoaderComponent;
  let fixture: ComponentFixture<ChipLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipLoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
