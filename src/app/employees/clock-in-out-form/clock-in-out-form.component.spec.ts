import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockInOutFormComponent } from './clock-in-out-form.component';

describe('ClockInOutFormComponent', () => {
  let component: ClockInOutFormComponent;
  let fixture: ComponentFixture<ClockInOutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockInOutFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockInOutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
