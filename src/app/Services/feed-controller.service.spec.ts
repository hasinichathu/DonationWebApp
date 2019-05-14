import { TestBed, inject } from '@angular/core/testing';

import { FeedControllerService } from './feed-controller.service';

describe('FeedControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedControllerService]
    });
  });

  it('should be created', inject([FeedControllerService], (service: FeedControllerService) => {
    expect(service).toBeTruthy();
  }));
});
