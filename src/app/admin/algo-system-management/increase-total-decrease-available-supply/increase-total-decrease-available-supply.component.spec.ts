import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseTotalDecreaseAvailableSupplyComponent } from './increase-total-decrease-available-supply.component';

describe('IncreaseTotalDecreaseAvailableSupplyComponent', () => {
  let component: IncreaseTotalDecreaseAvailableSupplyComponent;
  let fixture: ComponentFixture<IncreaseTotalDecreaseAvailableSupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseTotalDecreaseAvailableSupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseTotalDecreaseAvailableSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
