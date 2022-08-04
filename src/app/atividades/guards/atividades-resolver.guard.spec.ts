import { TestBed } from '@angular/core/testing';

import { AtividadesResolverGuard } from './atividades-resolver.guard';

describe('AtividadesResolverGuard', () => {
  let guard: AtividadesResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AtividadesResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
