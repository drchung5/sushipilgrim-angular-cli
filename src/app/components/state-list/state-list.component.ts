import { Component, OnInit, Input }  from '@angular/core'
import { Router } from '@angular/router'

import { ReviewDataService } from '../../services/review-data/review-data.service'
import { StateSelectionService } from "../../services/selection/selection.service";

class StateInfo {
  constructor( public name: string, public abbr: string, public hasReviews: boolean ) {}
}

// TODO: This component needs to be reworked so it doesn't flash
//       The states don't change and neither should the fact that
//       Some have reviews. The only thing that should change is
//       The selection bullet. That should be a style change not
//       structural change

@Component({
  selector: 'state-list',

  moduleId: "module.id",

  templateUrl: './state-list.component.html',

  styleUrls: ['./state-list.component.css'],

  providers: [ReviewDataService]

})

export class StateListComponent implements OnInit {

  selectedState: string = ""

  statesWithReviews: string[]

  constructor(
    private reviewDataService: ReviewDataService,
    private selectionService: StateSelectionService,
    private router: Router ) {

    // selected$ is an Observable so the subscribe
    // function watches for changes
    selectionService.selected$.subscribe(
      state => this.selectedState = state
    )
  }

  ngOnInit() {

    console.log(`State: ${this.selectedState}`)

    this.statesWithReviews = this.reviewDataService.getStatesWithReviews()

    // since 'All Reviews' is not a state we
    // will treat it as a special case
    if (this.statesWithReviews.length) {
      this.states[ 0 ].hasReviews = true
    }

    // TODO: this is a very inefficient algorithm
    for( let state of this.states ) {

      if( this.statesWithReviews.indexOf(state.abbr) !== -1 ) {
        state.hasReviews = true
      }

    }
  }

  // TODO this method is broken-the URL changes in the
  //      location bar but the page content does not
  clicked(state: string) {

    // only follow the link if the selected
    // state is different than the current state
    if( this.selectedState !== state ) {
      this.router.navigateByUrl(`/${state}`)
        .then(
          ()=>console.log(`Navigated to ${state}`),
          ()=>console.log('Navigation failed'))
    }

  }

  states: Array<StateInfo> = [
    new StateInfo('All Reviews',			 'ALL', false),
    new StateInfo('Alabama',						'AL', false),
    new StateInfo('Alaska',							'AK', false),
    new StateInfo('Arizona',						'AZ', false),
    new StateInfo('Arkansas',						'AR', false),
    new StateInfo('California',					'CA', false),
    new StateInfo('Colorado',						'CO', false),
    new StateInfo('Connecticut',				'CT', false),
    new StateInfo('Delaware', 					'DE', false),
    new StateInfo('Florida', 						'FL', false),
    new StateInfo('Georgia', 						'GA', false),
    new StateInfo('Hawaii', 						'HI', false),
    new StateInfo('Idaho',							'ID', false),
    new StateInfo('Illinois', 					'IL', false),
    new StateInfo('Indiana', 						'IN', false),
    new StateInfo('Iowa', 							'IA', false),
    new StateInfo('Kansas',							'KS', false),
    new StateInfo('Kentucky',						'KY', false),
    new StateInfo('Louisiana',					'LA', false),
    new StateInfo('Maine',							'ME', false),
    new StateInfo('Maryland',						'MD', false),
    new StateInfo('Massachusetts',			'MA', false),
    new StateInfo('Michigan',						'MI', false),
    new StateInfo('Minnesota',					'MN', false),
    new StateInfo('Mississippi',				'MS', false),
    new StateInfo('Missouri',						'MO', false),
    new StateInfo('Montana',						'MT', false),
    new StateInfo('Nebraska',						'NE', false),
    new StateInfo('Nevada',							'NV', false),
    new StateInfo('New Hampshire',			'NH', false),
    new StateInfo('New Jersey',					'NJ', false),
    new StateInfo('New Mexico',					'NM', false),
    new StateInfo('New York',						'NY', false),
    new StateInfo('North Carolina',			'NC', false),
    new StateInfo('North Dakota',				'ND', false),
    new StateInfo('Ohio',								'OH', false),
    new StateInfo('Oklahoma',						'OK', false),
    new StateInfo('Oregon',							'OR', false),
    new StateInfo('Pennsylvania',				'PA', false),
    new StateInfo('Rhode Island',				'RI', false),
    new StateInfo('South Carolina',			'SC', false),
    new StateInfo('South Dakota',				'SD', false),
    new StateInfo('Tennessee',					'TN', false),
    new StateInfo('Texas',							'TX', false),
    new StateInfo('Utah',								'UT', false),
    new StateInfo('Vermont',						'VT', false),
    new StateInfo('Virginia',						'VA', false),
    new StateInfo('Washington',					'WA', false),
    new StateInfo('West Virginia',			'WV', false),
    new StateInfo('Wisconsin',					'WI', false),
    new StateInfo('Wyoming',						'WY', false)
  ]

}

