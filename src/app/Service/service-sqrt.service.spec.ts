import { TestBed } from '@angular/core/testing';

import { ServiceSqrtService } from './service-sqrt.service';

describe('ServiceSqrtService', () => {
  let service: ServiceSqrtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSqrtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
