import { TestBed } from '@angular/core/testing';

import { DataEntryQualityService } from './data-entry-quality.service';

describe('DataEntryQualityService', () => {
  let service: DataEntryQualityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataEntryQualityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
