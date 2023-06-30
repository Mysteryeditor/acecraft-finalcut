import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authentGuardGuard } from './authent-guard.guard';

describe('authentGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authentGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
