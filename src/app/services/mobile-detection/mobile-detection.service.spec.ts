import { TestBed, inject  } from '@angular/core/testing'
import { MobileDetectionService } from './mobile-detection.service'

describe('MobileDetectionService', ()=>{

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [ MobileDetectionService ]
    })
  })

  // The pattern here is to:
  //  1. inject the service
  //  2. subscribe to the Observable
  //  3. set its value
  //  4. handle the subscription callback
  //  5. define the 'expect' clause
  //  6. call done()
  it('Should be mobile', done => {
    inject([ MobileDetectionService ], MobileDetectionService => {

      MobileDetectionService.isMobile$.subscribe(
        isMobile => {
          expect( isMobile ).toBe(true)
          done()
        }
      )

      MobileDetectionService.setMobile(true)

    })() // inject returns a function: call it here
  })

  it('Should NOT be mobile', done => {
    inject([ MobileDetectionService ], MobileDetectionService => {

      MobileDetectionService.isMobile$.subscribe(
        isMobile => {
          expect( isMobile ).toBe(false)
          done()
        }
      )

      MobileDetectionService.setMobile(false)

    })() // inject returns a function: call it here
  })

})