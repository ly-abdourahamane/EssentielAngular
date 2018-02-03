import { TestBed, inject } from '@angular/core/testing';

import { GenericAppService } from './generic-app.service';

describe('GenericAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenericAppService]
    });
  });

  it('should be created', inject([GenericAppService], (service: GenericAppService) => {
    expect(service).toBeTruthy();
  }));
});
