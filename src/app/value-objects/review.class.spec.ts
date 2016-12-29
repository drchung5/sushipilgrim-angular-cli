import { Review } from './review.class'

describe( 'Review Data Service', () => {

  it( 'Should create a Review Object', ()=>{

    let date: Date = new Date();

    let review: Review = new Review(
      1234,
      date,
      "name",
      'street',
      'city',
      'state',
      'zip',
      'phone',
      'webUrl',
      'mapUrl',
      ['line1','line2'],
      4
    )

    expect(review.id).toBe(1234)
    expect(review.reviewDate).toBe(date)
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