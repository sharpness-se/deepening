import { TestBed } from '@angular/core/testing';

import { GameUsageService } from './game-usage.service';

describe('GameUsageService', () => {
  let service: GameUsageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameUsageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
