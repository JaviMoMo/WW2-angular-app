import { TestBed } from '@angular/core/testing';

import { WarServicesService } from './war-services.service';

describe('WarServicesService', () => {
  let service: WarServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
