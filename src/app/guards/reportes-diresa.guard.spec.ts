import { TestBed, async, inject } from '@angular/core/testing';

import { ReportesDiresaGuard } from './reportes-diresa.guard';

describe('ReportesDiresaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportesDiresaGuard]
    });
  });

  it('should ...', inject([ReportesDiresaGuard], (guard: ReportesDiresaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
