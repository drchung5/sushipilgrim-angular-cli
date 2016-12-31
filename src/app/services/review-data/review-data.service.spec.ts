import { TestBed, inject } from '@angular/core/testing'
import { ReviewDataService } from './review-data.service'

describe( 'Review Data Service', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [ ReviewDataService ]
    })

  })

  it('Should return reviews', done => {

    inject([ ReviewDataService ], reviewDataService => {

      reviewDataService.getReviews('ALL').then( result => {
        expect(result.length).toBeGreaterThan(1)
        done()
      })

    })() // inject returns a function: call it here

  })


}

