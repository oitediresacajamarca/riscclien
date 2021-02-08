import { TestBed, async, inject } from '@angular/core/testing';

import { SeguimientoCargasGuard } from './seguimiento-cargas.guard';

describe('SeguimientoCargasGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeguimientoCargasGuard]
    });
  });

  it('should ...', inject([SeguimientoCargasGuard], (guard: SeguimientoCargasGuard) => {
    expect(guard).toBeTruthy();
  }));
});
