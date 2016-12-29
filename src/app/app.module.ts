import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { SushipilgrimRouterModule } from './app.routes'

import { PageMainComponent } from './pages/main/main-page.component'
import { StateListComponent } from './components/state-list/state-list.component'
import { ReviewComponent } from './components/review/review.component'
import { ReviewListComponent } from './components/review-list/review-list.component'
import { ReviewDataService } from './services/review-data/review-data.service'

@NgModule({
  imports:      [
    BrowserModule,
    SushipilgrimRouterModule
  ],

  declarations: [
    PageMainComponent,
    StateListComponent,
    ReviewComponent,
    ReviewListComponent
  ],

  providers:    [ ReviewDataService ],

  bootstrap:    [ PageMainComponent ]
})

export class AppModule { }
