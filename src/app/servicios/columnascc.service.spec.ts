import { TestBed } from '@angular/core/testing';

import { ColumnasccService } from './columnascc.service';

describe('ColumnasccService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColumnasccService = TestBed.get(ColumnasccService);
    expect(service).toBeTruthy();
  });
});
