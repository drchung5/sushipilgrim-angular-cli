import { Component } from '@angular/core'
import { ActivatedRoute }    from '@angular/router'

import { StateSelectionService }  from '../../services/selection/state-selection.service'

@Component({

  selector: 'page',

  moduleId: "module.id",

  templateUrl: './main-page.component.html',

  styleUrls: ['./main-page.component.css'],

  providers: [ StateSelectionService ]

})

export class PageMainComponent {

  // TODO: define 'ALL' as a constant
  // selectedReviews: string = 'ALL'

  constructor(
    private selectionService: StateSelectionService) {}


}
