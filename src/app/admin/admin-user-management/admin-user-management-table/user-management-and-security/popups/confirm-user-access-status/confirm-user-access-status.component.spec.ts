import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmUserAccessStatusComponent } from './confirm-user-access-status.component';

describe('ConfirmUserAccessStatusComponent', () => {
  let component: ConfirmUserAccessStatusComponent;
  let fixture: ComponentFixture<ConfirmUserAccessStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmUserAccessStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmUserAccessStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
