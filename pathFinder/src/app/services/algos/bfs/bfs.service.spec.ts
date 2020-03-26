import { TestBed } from '@angular/core/testing';

import { BfsService } from './bfs.service';

describe('BfsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BfsService = TestBed.get(BfsService);
    expect(service).toBeTruthy();
  });
});
