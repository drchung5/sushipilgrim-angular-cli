import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject'

// This service is used by the review-list and
// state-list components to indicate which
// reviews the user has selected

@Injectable()
export class StateSelectionService {

  private selected = new Subject<string>()

  selected$ = this.selected.asObservable()

  setState( selected: string ) : void {
    this.selected.next( selected )
  }

}
