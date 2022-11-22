import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';

const routes: Routes = [
  {
    path: 'timelines',
    component: CountdownTimerComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
