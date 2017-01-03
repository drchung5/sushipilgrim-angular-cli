import { Review } from '../../../../../NodeJS/sushipilgrim-server/value-objects/review.class'
import {ReviewDataService} from "../services/review-data/review-data.service";

describe( 'Review Data Service', () => {

  it( 'Should create a Review Object from JSON', ()=>{

    let date: Date = new Date();

    console.log(`spec: ${date.getTime()}`)

    let o = {
      id: 1234,
      reviewDate: date,
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

    console.log(`review: ${review.reviewDate.getTime()}`)

    expect(review.id).toBe(1234)
    expect(review.reviewDate.getTime()).toBe(date.getTime())
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