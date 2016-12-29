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

    console.log('ReviewListComponent: ngOnInit')

    // since ngOnInit is only called once, subscribe to changes in the URL parameter
    this.activatedRoute.params.subscribe((params)=>{

      this.selectedState = params['state']

      if ( this.selectedState === undefined ) {
        this.selectedState = 'ALL'
      }

      console.log(`Subscribed: ${this.selectedState}`)

      this.selectionService.setState(this.selectedState)
      this.reviewList = this.reviewDataService.getReviews(this.selectedState)
      window.scrollTo(0,0)

    })

  }

  onChangeUrlParams( params ) {

    this.selectedState = params['state']

    if ( this.selectedState === undefined ) {
      this.selectedState = 'ALL'
    }

    console.log(`Subscribed: ${this.selectedState}`)

    this.selectionService.setState(this.selectedState)
    this.reviewList = this.reviewDataService.getReviews(this.selectedState)
    window.scrollTo(0,0)

  }

}



