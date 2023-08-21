import { Injectable } from '@angular/core';
import { Card } from '../shared/card-module/card/card.model';
import { vehicles } from './model/vehicle-data';

@Injectable({
  providedIn: 'root'
})
export class VehicleMapService {

  constructor() { }

  public get vehiclesCards(): Card[] {
    var vehiclesData = vehicles;
    var cards: Card[] = vehiclesData.map(x => ({
      title: 'Vehicle: ' + x.model,
      description: 'Color: ' + x.color,
      additionalInfo: 'Year: ' + x.releaseYear + ' license: ' + x.licenseNumber
    }))
    return cards;
  }
}
