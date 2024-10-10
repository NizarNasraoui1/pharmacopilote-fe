import { TestBed } from '@angular/core/testing';

import { QualityControlServiceService } from './quality-control-service.service';

describe('QualityControlServiceService', () => {
  let service: QualityControlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualityControlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
