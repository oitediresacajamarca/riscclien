import { TestBed, async, inject } from '@angular/core/testing';

import { CargasHisGuard } from './cargas-his.guard';

describe('CargasHisGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargasHisGuard]
    });
  });

  it('should ...', inject([CargasHisGuard], (guard: CargasHisGuard) => {
    expect(guard).toBeTruthy();
  }));
});
