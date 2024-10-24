import { TestBed } from '@angular/core/testing';

import { DataEntryServiceService } from './data-entry-helper.service';

describe('DataEntryServiceService', () => {
  let service: DataEntryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataEntryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
