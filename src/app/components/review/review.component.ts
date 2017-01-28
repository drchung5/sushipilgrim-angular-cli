import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Review }            from '../../value-objects/review/review.value-object'
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

  @Input() enableAccordian : boolean

  // this array allows the template to display ricebowls based on
  // the rating - we use it because templates can only do 'for each'
  // loops not simple 'for' loops
  riceBowls: Array<Boolean> = new Array<Boolean>();

  colorBowl: string = "images/ricebowl.png";
  greyBowl:  string = "images/ricebowl-grey.png";

  expanded: boolean

  constructor( private reviewDataService: ReviewDataService,
               private router: Router ) {}

  ngOnInit() {

    console.log(`ReviewComponent: ngOnInit(${this.review.name})`)

    // configure the ricebowl array for the rating
    for( let i = 0; i < 5; i++ ) {
      this.riceBowls.push(i>=(Review.MAX_RATING-this.review.rating)?true:false)
    }
  }

  showThisReview() {
    this.router.navigateByUrl(`${this.review.id}`)
      .then()
  }
  
  more() {
    this.expanded = !this.expanded
  }
}