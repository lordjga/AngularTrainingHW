import { NgModule } from '@angular/core';
import { TRAINING_ROUTES } from './training-routes.config';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(TRAINING_ROUTES)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
