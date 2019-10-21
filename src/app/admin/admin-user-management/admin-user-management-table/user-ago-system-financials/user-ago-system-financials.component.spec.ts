import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAgoSystemFinancialsComponent } from './user-ago-system-financials.component';

describe('UserAgoSystemFinancialsComponent', () => {
  let component: UserAgoSystemFinancialsComponent;
  let fixture: ComponentFixture<UserAgoSystemFinancialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAgoSystemFinancialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAgoSystemFinancialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
