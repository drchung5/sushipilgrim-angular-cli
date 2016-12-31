import { Component, OnInit } from '@angular/core'
import { ActivatedRoute }    from '@angular/router'

import { Review } from "../../value-objects/review.class";

import { ReviewDataService } from '../../services/review-data/review-data.service'
import { StateSelectionService }  from '../../services/selection/state-selection.service'

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

    console.log('ReviewListComponent: ngOnInit')

    // since ngOnInit is only called once, subscribe to changes in the URL parameter
    this.activatedRoute.params.subscribe(params=>{

      this.selectedState = params['state']

      if ( this.selectedState === undefined ) {
        this.selectedState = 'ALL'
      }

      console.log(`Subscribed: ${this.selectedState}`)

      this.selectionService.setState(this.selectedState)

      this.reviewDataService.getReviews(this.selectedState).then(
        reviews => this.reviewList = reviews,
      )

      // scroll to the top of the page when the list changes
      window.scrollTo(0,0)

    })

  }

}



