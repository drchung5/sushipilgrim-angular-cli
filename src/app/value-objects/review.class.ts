// Value object representing restaurant review

export class Review {

  public static MAX_RATING = 5

  static getReviewFromJSON( json : string ) : Review {

    let o : Object = JSON.parse(json)

    return new Review(
      o['id'],
      new Date(o['reviewDate']), // TODO review use of Date
      o['name'],
      o['street'],
      o['city'],
      o['state'],
      o['zip'],
      o['phone'],
      o['webUrl'],
      o['mapUrl'],
      o['text'],
      o['rating']
    );

  }

  constructor(
    public id: number,
    public reviewDate: Date, // TODO review use of Date
    public name: string,
    public street: string,
    public city: string,
    public state: string,
    public zip: string,
    public phone: string,
    public webUrl: string,
    public mapUrl: string,
    public text: string[],
    public rating: number
  ){}

}