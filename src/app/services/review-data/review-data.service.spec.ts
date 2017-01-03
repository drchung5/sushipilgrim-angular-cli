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

  it('Should not return a review for New Mexico', done => {
    inject([ ReviewDataService ], reviewDataService => {
      reviewDataService.getReviews('NM').then( result => {
        expect(result.length).toBe(0)
        done()
      })
    })() // inject returns a function: call it here
  })

  it('Should return the review for Sushi House', done => {
    inject([ ReviewDataService ], reviewDataService => {
      reviewDataService.getReviewById(1001).then( result => {
        expect(result.name).toBe('Sushi House')
        done()
      })
    })() // inject returns a function: call it here
  })

  it('Should return states with reviews', done => {
    inject([ ReviewDataService ], reviewDataService => {
      reviewDataService.getStatesWithReviews().then( result => {
        expect(result).toBeTruthy()
        done()
      })
    })() // inject returns a function: call it here
  })

})

