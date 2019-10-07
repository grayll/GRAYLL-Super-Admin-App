import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionTwoComponent } from './function-two.component';

describe('FunctionTwoComponent', () => {
  let component: FunctionTwoComponent;
  let fixture: ComponentFixture<FunctionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
