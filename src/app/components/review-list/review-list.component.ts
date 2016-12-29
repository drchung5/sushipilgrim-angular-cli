import { Component, OnInit } from '@angular/core'
import { ActivatedRoute }    from '@angular/router'

import { Review } from "../../value-objects/review.class";

import { ReviewDataService } from '../../services/review-data/review-data.service'
import { StateSelectionService }  from '../../services/selection/selection.service'

// This component is just a container for reviews
// and will be used as the target component for
// routing.
@Component({

  selector: 'review-list',

  template: `
          <review *ngFor="let review of reviewList" [review]="review"></review>
  `,

  providers: [ ReviewDataService ]

})

export class ReviewListComponent {

  selectedState: string

  reviewList: Array<Review>

  constructor(
    private reviewDataService: ReviewDataService,
    private selectionService: StateSelectionService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this.selectedState = this.activatedRoute.snapshot.params['state']

    if ( !this.selectedState ) {
      this.selectedState = 'ALL'
    }

    this.selectionService.setState(this.selectedState)

    this.reviewList = this.reviewDataService.getReviews(this.selectedState)

    console.log(`State: ${this.selectedState}`)

  }

}



