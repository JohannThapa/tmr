import { TestBed } from '@angular/core/testing';

import { BitqueryService } from './bitquery.service';

describe('BitqueryService', () => {
  let service: BitqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
