import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoSystemDataComponent } from './algo-system-data.component';

describe('AlgoSystemDataComponent', () => {
  let component: AlgoSystemDataComponent;
  let fixture: ComponentFixture<AlgoSystemDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoSystemDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoSystemDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
