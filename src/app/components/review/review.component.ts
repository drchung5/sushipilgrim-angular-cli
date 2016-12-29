import { Component, Input, OnInit } from '@angular/core'

import { Review }            from '../../value-objects/review.class'
import { ReviewDataService } from '../../services/review-data/review-data.service'


// This component displays a Review. It handles both the
// minimized and expanded (accordian) format of the review
@Component({

  selector: 'review',

  moduleId: "module.id",

  templateUrl: './review.component.html',

  styleUrls: ['./review.component.css'],

  providers: [ReviewDataService]

})

export class ReviewComponent implements OnInit {

  @Input() review: Review

  // this array allows the template to display ricebowls based on the rating
  riceBowls: Array<Boolean> = new Array<Boolean>();

  colorBowl: string = "images/ricebowl.png";
  greyBowl:  string = "images/ricebowl-grey.png";

  expanded: boolean = false

  constructor( private reviewDataService: ReviewDataService ) {}

  ngOnInit() {

    // configure the ricebowl array for the rating
    for( let i = 0; i < 4; i++ ) {
      this.riceBowls.push(i>=(Review.MAX_RATING-this.review.rating)?true:false)
    }

  }

  more() {
    this.expanded = !this.expanded
  }

}