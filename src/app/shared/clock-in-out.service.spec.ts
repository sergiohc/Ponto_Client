import { TestBed } from '@angular/core/testing';

import { ClockInOutService } from './clock-in-out.service';

describe('ClockInOutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClockInOutService = TestBed.get(ClockInOutService);
    expect(service).toBeTruthy();
  });
});
