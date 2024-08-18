import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancejavaComponent } from './advancejava.component';

describe('AdvancejavaComponent', () => {
  let component: AdvancejavaComponent;
  let fixture: ComponentFixture<AdvancejavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancejavaComponent]
    });
    fixture = TestBed.createComponent(AdvancejavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
