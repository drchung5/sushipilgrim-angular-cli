import { NgModule }             from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ReviewListComponent }  from './components/review-list/review-list.component'

const routes: Routes = [
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


