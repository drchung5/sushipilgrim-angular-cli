import { TestBed, inject  } from '@angular/core/testing'
import { StateSelectionService } from './state-selection.service'

describe('StateSelectionService', ()=>{

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [ StateSelectionService ]
    })
  })

  // The pattern here is to:
  //  1. inject the service
  //  2. subscribe to the Observable
  //  3. set its value
  //  4. handle the subscription callback
  //  5. define the 'expect' clause
  //  6. call done()
  it('Should set state', done => {
    inject([ StateSelectionService ], stateSelectionService => {

      stateSelectionService.selected$.subscribe(
        state => {
          expect( state ).toBe('AZ')
          done()
        }
      )

      stateSelectionService.setState('AZ')

    })() // inject returns a function: call it here
  })

})