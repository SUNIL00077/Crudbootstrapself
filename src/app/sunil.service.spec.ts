import { TestBed } from '@angular/core/testing';

import { SunilService } from './sunil.service';

describe('SunilService', () => {
  let service: SunilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SunilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
