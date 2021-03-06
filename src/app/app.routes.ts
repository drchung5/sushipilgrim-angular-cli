import { NgModule }             from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ReviewListComponent }  from './components/review-list/review-list.component'
import { AboutComponent } from './components/about/about.component'

// This app does something unusual with routing. Regardless of the
// state chosen, the same component is displayed in the router
// outlet. Therefore in the PageListComponent we subscribe to URL parameter
// changes and update accordingly
const routes: Routes = [
  { path: 'about',  component: AboutComponent },
  { path: ':state', component: ReviewListComponent },
  { path: '',       component: ReviewListComponent }
]

@NgModule({

  imports: [
    RouterModule.forRoot( routes )
  ],

  exports: [
    RouterModule
  ],

  providers: [
  ]

})
export class SushipilgrimRouterModule {}


