import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionAlgorithmComponent } from './function-algorithm.component';

describe('FunctionAlgorithmComponent', () => {
  let component: FunctionAlgorithmComponent;
  let fixture: ComponentFixture<FunctionAlgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionAlgorithmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
