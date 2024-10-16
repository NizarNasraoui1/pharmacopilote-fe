import { TestBed } from '@angular/core/testing';

import { BatchAssessmentService } from './batch-assessment.service';

describe('BatchAssessmentService', () => {
  let service: BatchAssessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchAssessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
