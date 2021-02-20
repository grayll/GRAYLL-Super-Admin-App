import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmKycDeclineStatusComponent } from './confirm-kyc-decline-status.component';

describe('ConfirmKycDeclineStatusComponent', () => {
  let component: ConfirmKycDeclineStatusComponent;
  let fixture: ComponentFixture<ConfirmKycDeclineStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmKycDeclineStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmKycDeclineStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
