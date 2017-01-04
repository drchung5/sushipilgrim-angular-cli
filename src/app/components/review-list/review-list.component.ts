import { Component, OnInit } from '@angular/core'
import { ActivatedRoute }    from '@angular/router'

import { Review } from "../../value-objects/review/review.value-object";
import { ReviewData } from "../../value-objects/review-data/review-data.value-object";

import { ReviewDataService } from '../../services/review-data/review-data.service'
import { StateSelectionService }  from '../../services/selection/state-selection.service'

// This component is just a container for reviews
// and will be used as the target component for
// routing.
@Component({

  selector: 'review-list',

  moduleId: "module.id",

  templateUrl: './review-list.component.html',

  styleUrls: ['./review-list.component.css'],

  providers: [ ReviewDataService ]

})

export class ReviewListComponent {

  selectedState: string

  reviews: Array<Review>
  page: number
  hasMorePages: boolean
  enableAccordian: boolean = true

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

      // console.log(`Params: ${this.selectedState}`)

      this.selectionService.setState(this.selectedState)

      this.reviewDataService.getReviews(this.selectedState).then(
        data => {
          this.reviews = data.reviews
          this.page = data.page
          this.hasMorePages = data.hasMorePages
          this.enableAccordian = (this.reviews.length>1)
          console.log(`ReviewListComponent enableAccordian: ${this.enableAccordian}`)
        }
      )

      // scroll to the top of the page when the list changes
      window.scrollTo(0,0)

    })

  }

}



