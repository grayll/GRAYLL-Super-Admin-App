import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserManagementTableComponent } from './admin-user-management-table.component';

describe('AdminUserManagementTableComponent', () => {
  let component: AdminUserManagementTableComponent;
  let fixture: ComponentFixture<AdminUserManagementTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserManagementTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserManagementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
