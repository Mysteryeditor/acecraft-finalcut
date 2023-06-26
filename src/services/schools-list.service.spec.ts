import { TestBed } from '@angular/core/testing';

import { SchoolsListService } from './schools-list.service';

describe('SchoolsListService', () => {
  let service: SchoolsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
