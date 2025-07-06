import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorCreatureComponent } from './cursor-creature.component';

describe('CursorCreatureComponent', () => {
  let component: CursorCreatureComponent;
  let fixture: ComponentFixture<CursorCreatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursorCreatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursorCreatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
