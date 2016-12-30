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

  it( 'Should return 2 reviews',
    inject([ReviewDataService], (reviewDataService)=> {
      expect( reviewDataService.getReviews('ALL',2).length ).toBe(2)
    })
  )

  it( 'Should not return review for NM',
    inject([ReviewDataService], (reviewDataService)=> {
      expect( reviewDataService.getReviews('NM').length ).toBe(0)
    })
  );

  it( 'Should return review for Sushi House',
    inject([ReviewDataService], (reviewDataService)=> {
      expect( reviewDataService.getReviewById(1001).name ).toBe('Sushi House')
    })
  );

  it( 'Should not return review for invalid id',
    inject([ReviewDataService], (reviewDataService)=> {
      expect( reviewDataService.getReviewById(-1) ).toBeFalsy()
    })
  );

})

