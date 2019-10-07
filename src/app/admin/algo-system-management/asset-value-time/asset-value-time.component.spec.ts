import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetValueTimeComponent } from './asset-value-time.component';

describe('AssetValueTimeComponent', () => {
  let component: AssetValueTimeComponent;
  let fixture: ComponentFixture<AssetValueTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetValueTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetValueTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
