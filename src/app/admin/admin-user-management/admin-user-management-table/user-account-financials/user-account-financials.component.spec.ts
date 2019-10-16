import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountFinancialsComponent } from './user-account-financials.component';

describe('UserAccountFinancialsComponent', () => {
  let component: UserAccountFinancialsComponent;
  let fixture: ComponentFixture<UserAccountFinancialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccountFinancialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountFinancialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
