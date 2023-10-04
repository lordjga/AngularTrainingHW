import { Component, Input } from '@angular/core';
import { Card } from '../../shared/card-module/card/card.model';
import { FavoriteService } from '../../user-list-main/services/favorite.service';

@Component({
  selector: 'app-vehicle-list-view',
  templateUrl: './vehicle-list-view.component.html',
  styleUrls: ['./vehicle-list-view.component.scss']
})
export class VehicleListViewComponent {
  @Input() vehicles: Array<Card> = [];

  label: string = 'Vehicle list View Component';
  constructor(private favoriteService: FavoriteService) {
  }

  delete(vehicle: Card) {
    var index = this.vehicles.indexOf(vehicle)
    if (index > -1) {
      this.vehicles.splice(index, 1);
    }
  }
  addToFavor(vehicle: Card) {
    this.favoriteService.addToFavor(vehicle);
  }
}
