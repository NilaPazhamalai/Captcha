import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathLogicModelComponent } from './math-logic-model.component';

describe('MathLogicModelComponent', () => {
  let component: MathLogicModelComponent;
  let fixture: ComponentFixture<MathLogicModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathLogicModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathLogicModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
