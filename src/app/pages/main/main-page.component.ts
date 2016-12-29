import { Component } from '@angular/core'

import { StateSelectionService }  from '../../services/selection/selection.service'

@Component({

  selector: 'page',

  template: `

    <aside>
      <header>Reviews</header>
      <state-list></state-list>
    </aside>
    
    <section>
      <router-outlet></router-outlet>
    </section>

  `,

  styles: [`

    header {
      margin-bottom: 0.5em;
    }

    aside { 
      width: 10em;
      float: right;
      padding: 0.6em;
      background-color: #f8f8f8;
      font-size: 0.9em;
     }

    section {
      width: auto;
      overflow: hidden;
      padding-right: 1em;
    }
     
  `],

  providers: [ StateSelectionService ]

})

export class PageMainComponent {

  // TODO: define 'ALL' as a constant
  // selectedReviews: string = 'ALL'

  constructor(private selectionService: StateSelectionService) {}

}
