import { Component } from '@angular/core'

import { MobileDetectionService } from '../../services/mobile-detection/mobile-detection.service'

@Component({

  selector: 'page',

  moduleId: "module.id",

  templateUrl: './main-page.component.html',

  styleUrls: ['./main-page.component.css'],

  providers: []

})

export class MainPageComponent {

  // TODO: define 'ALL' as a constant
  // selectedReviews: string = 'ALL'

  isMobile: boolean

  constructor( private mobileDetectionService: MobileDetectionService) {

    console.log('PageMainCompenent:constructor')
    // isMobile$ is an Observable so the subscribe
    // function watches for changes
    this.mobileDetectionService.isMobile$.subscribe(
      isMobile => {
        this.isMobile = isMobile
      }
    )

  }


}
