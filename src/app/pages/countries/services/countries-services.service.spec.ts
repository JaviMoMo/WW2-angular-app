import { TestBed } from '@angular/core/testing';

import { CountriesServicesService } from './countries-services.service';

describe('CountriesServicesService', () => {
  let service: CountriesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
