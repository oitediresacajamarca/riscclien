import { TestBed } from '@angular/core/testing';

import { PuntoDigitacionService } from './punto-digitacion.service';

describe('PuntoDigitacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PuntoDigitacionService = TestBed.get(PuntoDigitacionService);
    expect(service).toBeTruthy();
  });
});
