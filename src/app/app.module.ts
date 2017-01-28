import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule }    from '@angular/http'

import { SushipilgrimRouterModule } from './app.routes'

import { MainPageComponent }   from './pages/main/main-page.component'
import { StateListComponent }  from './components/state-list/state-list.component'
import { ReviewComponent }     from './components/review/review.component'
import { ReviewListComponent } from './components/review-list/review-list.component'
import { AboutComponent }      from './components/about/about.component'

import { ReviewDataService }      from './services/review-data/review-data.service'
import { StateSelectionService }  from './services/state-selection/state-selection.service'
import { MobileDetectionService } from './services/mobile-detection/mobile-detection.service'


@NgModule({
  imports:      [
    BrowserModule,
    SushipilgrimRouterModule,
    HttpModule
  ],

  declarations: [
    MainPageComponent,
    StateListComponent,
    ReviewComponent,
    ReviewListComponent,
    AboutComponent
  ],

  providers:    [ ReviewDataService, MobileDetectionService, StateSelectionService ],

  bootstrap:    [ MainPageComponent ]
})

export class AppModule { }
