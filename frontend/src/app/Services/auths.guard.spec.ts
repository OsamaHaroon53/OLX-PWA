import { TestBed, async, inject } from '@angular/core/testing';

import { AuthsGuard } from './auths.guard';

describe('AuthsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthsGuard]
    });
  });

  it('should ...', inject([AuthsGuard], (guard: AuthsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
