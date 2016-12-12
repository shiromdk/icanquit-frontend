/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VideosListingService } from './videos-listing.service';

describe('VideosListingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideosListingService]
    });
  });

  it('should ...', inject([VideosListingService], (service: VideosListingService) => {
    expect(service).toBeTruthy();
  }));
});
