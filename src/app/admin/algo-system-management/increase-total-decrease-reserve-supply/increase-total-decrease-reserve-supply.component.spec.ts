import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseTotalDecreaseReserveSupplyComponent } from './increase-total-decrease-reserve-supply.component';

describe('IncreaseTotalDecreaseReserveSupplyComponent', () => {
  let component: IncreaseTotalDecreaseReserveSupplyComponent;
  let fixture: ComponentFixture<IncreaseTotalDecreaseReserveSupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseTotalDecreaseReserveSupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseTotalDecreaseReserveSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
