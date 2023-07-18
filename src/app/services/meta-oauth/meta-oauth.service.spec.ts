import { TestBed } from '@angular/core/testing';

import { MetaOAuthService } from './meta-oauth.service';

describe('MetaOAuthService', () => {
  let service: MetaOAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaOAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
