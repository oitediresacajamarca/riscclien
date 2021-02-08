import { TestBed } from '@angular/core/testing';

import { CargasService } from './cargas.service';

describe('CargasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargasService = TestBed.get(CargasService);
    expect(service).toBeTruthy();
  });
});
