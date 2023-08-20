import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListMainModule } from './training/user-list-main/user-list-main.module';
import { VehicleListMainComponentComponent } from './training/vehicle-list-main-component/vehicle-list-main-component.component';
import { VehicleListMainComponent } from './training/vehicle-list-main/vehicle-list-main.component';
import { VehicleListViewComponent } from './training/vehicle-list-main/vehicle-list-view/vehicle-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleListMainComponentComponent,
    VehicleListMainComponent,
    VehicleListViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserListMainModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
