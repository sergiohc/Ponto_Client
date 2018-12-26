import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockInOutListComponent } from './clock-in-out-list.component';

describe('ClockInOutListComponent', () => {
  let component: ClockInOutListComponent;
  let fixture: ComponentFixture<ClockInOutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockInOutListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockInOutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
