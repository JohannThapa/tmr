import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpTechnologiesComponent } from './exp-technologies.component';

describe('ExpTechnologiesComponent', () => {
  let component: ExpTechnologiesComponent;
  let fixture: ComponentFixture<ExpTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpTechnologiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
