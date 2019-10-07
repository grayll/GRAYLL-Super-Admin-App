import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatePauseSystemComponent } from './activate-pause-system.component';

describe('ActivatePauseSystemComponent', () => {
  let component: ActivatePauseSystemComponent;
  let fixture: ComponentFixture<ActivatePauseSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivatePauseSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatePauseSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
