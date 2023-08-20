import { Component } from '@angular/core';
import { Vehicle } from './model/vehicle.model';

@Component({
  selector: 'app-vehicle-list-main',
  templateUrl: './vehicle-list-main.component.html',
  styleUrls: ['./vehicle-list-main.component.scss']
})
export class VehicleListMainComponent {
  vehicles: Array<Vehicle> = [];

  constructor() {
  }

  ngOnInit(){
    this.vehicles = vehicles;
  }
}
