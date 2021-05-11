import { TestBed } from '@angular/core/testing';

import { foodFactService } from './food-fact.service';

describe('foodFactService', () => {
  let service: foodFactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(foodFactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
