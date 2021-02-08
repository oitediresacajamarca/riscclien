import { TestBed } from '@angular/core/testing';

import { ControlCalidadService } from './control-calidad.service';

describe('ControlCalidadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlCalidadService = TestBed.get(ControlCalidadService);
    expect(service).toBeTruthy();
  });
});
