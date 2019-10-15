import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountsAndRegistrationComponent } from './user-accounts-and-registration.component';

describe('UserAccountsAndRegistrationComponent', () => {
  let component: UserAccountsAndRegistrationComponent;
  let fixture: ComponentFixture<UserAccountsAndRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccountsAndRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountsAndRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
