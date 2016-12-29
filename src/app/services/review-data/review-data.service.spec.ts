import { TestBed, inject } from '@angular/core/testing'

import { ReviewDataService } from './review-data.service'

describe( 'Review Data Service', () => {

  beforeEach( () => {
    TestBed.configureTestingModule({
      providers: [ ReviewDataService ]
    })
  })

  it( 'Should return reviews',
    inject([ReviewDataService], (reviewDataService)=> {
      expect( reviewDataService.getReviews('ALL').length ).toBeGreaterThan(1)
    })
  )

  it( 'Should not return review for NM',
    inject([ReviewDataService], (reviewDataService)=> {
      expect( reviewDataService.getReviews('NM').length ).toBe(0)
    })
  );

})

