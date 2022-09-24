import { TestBed } from '@angular/core/testing';

import { SoftoNgxComponentsService } from './softo-ngx-components.service';

describe('SoftoNgxComponentsService', () => {
  let service: SoftoNgxComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftoNgxComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
