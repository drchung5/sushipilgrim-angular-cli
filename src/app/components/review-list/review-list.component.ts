import { Component, OnInit } from '@angular/core'
import {ActivatedRoute, Router }    from '@angular/router'

import { Review } from "../../value-objects/review/review.value-object";

import { ReviewDataService } from '../../services/review-data/review-data.service'
import { StateSelectionService }  from '../../services/state-selection/state-selection.service'
import { MobileDetectionService } from '../../services/mobile-detection/mobile-detection.service'

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

  MOBLIE_BREAKPOINT: number = 768
  REVIEWS_PER_PAGE:  number = 5

  selectedState: string

  reviews: Array<Review>
  currentPage: number = 0
  hasMorePages: boolean
  enableAccordian: boolean = true
  path: Array<string> = [""]

  isMobile:       boolean
  showMobileMenu: boolean = false

  constructor(
    private reviewDataService: ReviewDataService,
    private stateSelectionService: StateSelectionService,
    private mobileDetectionService: MobileDetectionService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.isMobile = window.innerWidth < this.MOBLIE_BREAKPOINT
  }

  ngOnInit() {

    // since ngOnInit is only called once, subscribe to changes in the URL parameter
    this.activatedRoute.params.subscribe(params=>{

      this.selectedState = params['state']
      if ( this.selectedState === undefined ) {
        this.selectedState = 'ALL'
      }

      // this.stateSelectionService.setState(this.selectedState)
      this.mobileDetectionService.setMobile(this.isMobile)

      this.doNav()

    })

    this.activatedRoute.queryParams.subscribe(queryParams=>{

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

    this.showMobileMenu = false

    this.stateSelectionService.setState(this.selectedState)

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

  onHamburger() {
    this.showMobileMenu = !this.showMobileMenu
  }

  onResize(event) {

    this.isMobile = event.target.innerWidth < this.MOBLIE_BREAKPOINT

    this.mobileDetectionService.setMobile(this.isMobile)

    if( !this.isMobile ) {
      this.showMobileMenu = false
    }

  }

}





