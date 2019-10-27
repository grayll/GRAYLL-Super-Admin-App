import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementAndSecurityComponent } from './user-management-and-security.component';

describe('UserManagementAndSecurityComponent', () => {
  let component: UserManagementAndSecurityComponent;
  let fixture: ComponentFixture<UserManagementAndSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementAndSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementAndSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
