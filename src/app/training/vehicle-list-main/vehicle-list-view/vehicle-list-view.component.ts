import { Component, Input } from '@angular/core';
import { Vehicle } from '../model/vehicle.model';

@Component({
  selector: 'app-vehicle-list-view',
  templateUrl: './vehicle-list-view.component.html',
  styleUrls: ['./vehicle-list-view.component.scss']
})
export class VehicleListViewComponent {
  @Input() vehicles: Array<Vehicle> = [];

  label: string = 'Vehicle list View Component';

  delete(vehicle: Vehicle) {
    delete this.vehicles[this.vehicles.indexOf(vehicle)];
  }
}
