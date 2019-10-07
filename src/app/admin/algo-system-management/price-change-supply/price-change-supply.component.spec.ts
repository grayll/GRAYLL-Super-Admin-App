import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceChangeSupplyComponent } from './price-change-supply.component';

describe('PriceChangeSupplyComponent', () => {
  let component: PriceChangeSupplyComponent;
  let fixture: ComponentFixture<PriceChangeSupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceChangeSupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceChangeSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
