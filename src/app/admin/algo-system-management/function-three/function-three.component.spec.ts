import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionThreeComponent } from './function-three.component';

describe('FunctionThreeComponent', () => {
  let component: FunctionThreeComponent;
  let fixture: ComponentFixture<FunctionThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
