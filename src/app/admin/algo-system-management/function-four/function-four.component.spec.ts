import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionFourComponent } from './function-four.component';

describe('FunctionFourComponent', () => {
  let component: FunctionFourComponent;
  let fixture: ComponentFixture<FunctionFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
