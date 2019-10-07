import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoSystemManagementComponent } from './algo-system-management.component';

describe('AlgoSystemManagementComponent', () => {
  let component: AlgoSystemManagementComponent;
  let fixture: ComponentFixture<AlgoSystemManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoSystemManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoSystemManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
