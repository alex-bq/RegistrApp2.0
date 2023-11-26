import { TestBed } from '@angular/core/testing';

import { IngresadoProfeGuard } from './ingresado-profe.guard';

describe('IngresadoProfeGuard', () => {
  let guard: IngresadoProfeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadoProfeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
