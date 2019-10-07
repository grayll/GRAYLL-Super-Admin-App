import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionOneComponent } from './function-one.component';

describe('FunctionOneComponent', () => {
  let component: FunctionOneComponent;
  let fixture: ComponentFixture<FunctionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
