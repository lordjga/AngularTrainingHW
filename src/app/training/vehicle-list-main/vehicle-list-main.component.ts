import { Component } from '@angular/core';
import { VehicleMapService } from './vehicle-map.service';
import { Card } from '../shared/card-module/card/card.model';

@Component({
  selector: 'app-vehicle-list-main',
  templateUrl: './vehicle-list-main.component.html',
  styleUrls: ['./vehicle-list-main.component.scss']
})
export class VehicleListMainComponent {
  vehicles: Array<Card> = [];

  constructor(private dataService: VehicleMapService) {
  }

  ngOnInit() {
    this.vehicles = this.dataService.vehiclesCards;
  }
}
