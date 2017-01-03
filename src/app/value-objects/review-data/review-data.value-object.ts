import {Review} from './../review/review.value-object'

export class ReviewData {

  constructor(
    public count: number,
    public page: number,
    public hasMorePages: boolean,
    public reviews: Array<Review>
  ) {}


}