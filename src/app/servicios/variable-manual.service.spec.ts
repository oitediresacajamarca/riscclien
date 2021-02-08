import { TestBed } from '@angular/core/testing';

import { VariableManualService } from './variable-manual.service';

describe('VariableManualService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VariableManualService = TestBed.get(VariableManualService);
    expect(service).toBeTruthy();
  });
});
