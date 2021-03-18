import { TestBed } from '@angular/core/testing';

import { MaestroEstablecimientoService } from './maestro-establecimiento.service';

describe('MaestroEstablecimientoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaestroEstablecimientoService = TestBed.get(MaestroEstablecimientoService);
    expect(service).toBeTruthy();
  });
});
