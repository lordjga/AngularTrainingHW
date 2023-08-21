import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListMainModule } from './training/user-list-main/user-list-main.module';
import { VehicleListMainModule } from './training/vehicle-list-main/vehicle-list-main.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserListMainModule,
    VehicleListMainModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
