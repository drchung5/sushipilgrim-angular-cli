import { Review } from './review.value-object'
import {ReviewDataService} from "../../services/review-data/review-data.service";

describe( 'Review Data Service', () => {

  it( 'Should create a Review Object from JSON', ()=>{

    let date: Date = new Date();

    let o = {
      id: 1234,
      reviewDate: date.toISOString(),
      name: 'name',
      street: 'street',
      city: 'city',
      state: 'state',
      zip: 'zip',
      phone: 'phone',
      webUrl: 'webUrl',
      mapUrl: 'mapUrl',
      text: ['line1','line2'],
      rating: 4
    }

    let review: Review = Review.getReviewFromJSON( JSON.stringify(o) )


    expect(review.id).toBe(1234)
    expect(review.reviewDate).toBe(date.toISOString())
    expect(review.name).toBe('name')
    expect(review.street).toBe('street')
    expect(review.city).toBe('city')
    expect(review.state).toBe('state')
    expect(review.zip).toBe('zip')
    expect(review.phone).toBe('phone')
    expect(review.webUrl).toBe('webUrl')
    expect(review.mapUrl).toBe('mapUrl')
    expect(review.text[0]).toBe('line1')
    expect(review.text[1]).toBe('line2')
    expect(review.rating).toBe(4)

  })

})