import { TestBed, async, inject } from '@angular/core/testing';

import { ReportesAmbitoGuard } from './reportes-ambito.guard';

describe('ReportesAmbitoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportesAmbitoGuard]
    });
  });

  it('should ...', inject([ReportesAmbitoGuard], (guard: ReportesAmbitoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
