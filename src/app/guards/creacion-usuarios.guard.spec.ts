import { TestBed, async, inject } from '@angular/core/testing';

import { CreacionUsuariosGuard } from './creacion-usuarios.guard';

describe('CreacionUsuariosGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreacionUsuariosGuard]
    });
  });

  it('should ...', inject([CreacionUsuariosGuard], (guard: CreacionUsuariosGuard) => {
    expect(guard).toBeTruthy();
  }));
});
