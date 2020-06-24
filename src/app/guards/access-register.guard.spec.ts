import { TestBed, async, inject } from '@angular/core/testing';

import { AccessRegisterGuard } from './access-register.guard';

describe('AccessRegisterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessRegisterGuard]
    });
  });

  it('should ...', inject([AccessRegisterGuard], (guard: AccessRegisterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
