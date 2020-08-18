import { TestBed, async, inject } from '@angular/core/testing';

import { CargasSisGuard } from './cargas-sis.guard';

describe('CargasSisGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargasSisGuard]
    });
  });

  it('should ...', inject([CargasSisGuard], (guard: CargasSisGuard) => {
    expect(guard).toBeTruthy();
  }));
});
