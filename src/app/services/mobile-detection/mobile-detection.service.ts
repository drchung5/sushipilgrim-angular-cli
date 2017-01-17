import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject'

// This service is used by the review-list and
// state-list components to indicate which
// reviews the user has selected

@Injectable()
export class MobileDetectionService {

  private isMobile = new Subject<boolean>();

  isMobile$ = this.isMobile.asObservable();

  setMobile( isMobile: boolean ) : void {
    this.isMobile.next( isMobile );
  }

}
