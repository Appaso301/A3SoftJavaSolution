import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningPopUpComponent } from './warning-pop-up.component';

describe('WarningPopUpComponent', () => {
  let component: WarningPopUpComponent;
  let fixture: ComponentFixture<WarningPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarningPopUpComponent]
    });
    fixture = TestBed.createComponent(WarningPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
