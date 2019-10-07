import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTimeRateComponent } from './change-time-rate.component';

describe('ChangeTimeRateComponent', () => {
  let component: ChangeTimeRateComponent;
  let fixture: ComponentFixture<ChangeTimeRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTimeRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTimeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
