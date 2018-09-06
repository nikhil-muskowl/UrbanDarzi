import { TestBed, inject } from '@angular/core/testing';

import { QueryFormService } from './query-form.service';

describe('QueryFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryFormService]
    });
  });

  it('should be created', inject([QueryFormService], (service: QueryFormService) => {
    expect(service).toBeTruthy();
  }));
});
