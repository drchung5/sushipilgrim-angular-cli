import { Component, OnInit } from '@angular/core'
import {ActivatedRoute, Router, UrlSegment}    from '@angular/router'

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

  REVIEWS_PER_PAGE: number = 5

  selectedState: string

  reviews: Array<Review>
  currentPage: number = 0
  hasMorePages: boolean
  enableAccordian: boolean = true
  path: Array<string> = [""]

  // TODO this is a hack trying to use currentPage in the template seems to treat the value as a string!!!
  getNextPage(): number {
    console.log(typeof this.currentPage)
    return 3+1
  }

  constructor(
    private reviewDataService: ReviewDataService,
    private selectionService: StateSelectionService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {

    // since ngOnInit is only called once, subscribe to changes in the URL parameter
    this.activatedRoute.params.subscribe(params=>{

      console.log(`params - state: ${params['state']}`)

      this.selectedState = params['state']
      if ( this.selectedState === undefined ) {
        this.selectedState = 'ALL'
      }
      this.selectionService.setState(this.selectedState)

      this.doNav()

    })

    this.activatedRoute.queryParams.subscribe(queryParams=>{

      console.log(`queryParams - page: ${queryParams['page']}  count: ${queryParams['count']}`)

      let page = queryParams['page'] || 0
      let count = queryParams['count']

      if( !count ) {
        this.doNav( page )
      } else {
        this.doNav( page, count )
      }

    })
  }

  doNav( page: number = 0, count: number = this.REVIEWS_PER_PAGE ) {

    this.reviewDataService.getReviews(this.selectedState, page, count).then(
      data => {
        this.reviews = data.reviews

        // TODO this is a hack!!! I do not understant why the typeof data.page is a string
        this.currentPage = Number(data.page).valueOf()
        this.hasMorePages = data.hasMorePages
        this.enableAccordian = (this.reviews.length>1)

        this.updateBreadcrumbs()
      }
    )

    // scroll to the top of the currentPage when the list changes
    window.scrollTo(0,0)

  }

  updateBreadcrumbs() : void {

    this.path= ["All Reviews"]

    // TODO only compare first segment
    let url: string = this.router.url

    if( url === '/' || url.startsWith("/?") || url.startsWith("/ALL") ) {

    } else {

      this.path.push(this.reviews[0].state)

      if ( /^\/\d+$/.test(url)  ) {

        this.path.push(this.reviews[0].name)

      }

    }

  }

  doBreadcrumbNav( pathSegment: number ): void {

    // If the user clicks on the current breadcrumb
    // do nothing
    if( pathSegment < this.path.length-1 ) {

      // set the default to all
      let url: string = "ALL"

      // if the user clicks on the 2nd (#1) item
      // make it the path
      if( pathSegment === 1 ) {
        url = this.path[1];
      }

      this.router.navigateByUrl(url)
        .then()
    }

  }

}





