import { TestBed } from '@angular/core/testing';

import { CreateArticleGuardGuard } from './create-article-guard.guard';

describe('CreateArticleGuardGuard', () => {
  let guard: CreateArticleGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateArticleGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
