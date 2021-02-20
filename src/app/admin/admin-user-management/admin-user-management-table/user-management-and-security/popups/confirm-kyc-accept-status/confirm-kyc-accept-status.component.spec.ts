import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmKycAcceptStatusComponent } from './confirm-kyc-accept-status.component';

describe('ConfirmKycAcceptStatusComponent', () => {
  let component: ConfirmKycAcceptStatusComponent;
  let fixture: ComponentFixture<ConfirmKycAcceptStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmKycAcceptStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmKycAcceptStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
