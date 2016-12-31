import { TestBed, inject  } from '@angular/core/testing'
import { StateSelectionService } from './state-selection.service'

describe('StateSelectionService', ()=>{

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [ StateSelectionService ]
    })
  })

  // The pattern here is to:
  //  1. subscribe to the Observable
  //  2. set its value
  //  3. handle the subscription callback
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