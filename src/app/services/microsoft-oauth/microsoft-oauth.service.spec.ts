import { TestBed } from '@angular/core/testing';

import { MicrosoftOAuthService } from './microsoft-oauth.service';

describe('MicrosoftOAuthService', () => {
  let service: MicrosoftOAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrosoftOAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
