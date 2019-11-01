import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionGrzComponent } from './function-grz.component';

describe('FunctionGrzComponent', () => {
  let component: FunctionGrzComponent;
  let fixture: ComponentFixture<FunctionGrzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionGrzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionGrzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
