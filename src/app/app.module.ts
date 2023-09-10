import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrainingModule } from './training/training.module';
import { TrainingRoutingModule } from './training/core/routing/training-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TrainingRoutingModule, 
    BrowserAnimationsModule,
    TrainingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
