import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Card } from '../shared/card-module/card/card.model';
import { FullNamePipe } from '../shared/pipes/full-name.pipe';
import { OrderByCreationDatePipe } from '../shared/pipes/order-by-creation-date.pipe';
import { users } from './model/user-data';
import { Gender } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserMapService {

  constructor(private fullNamePipe: FullNamePipe, private orderByCreationDatePipe: OrderByCreationDatePipe,
    private datePipe: DatePipe) { }

  public get usersCards(): Card[] {
    var usersData = this.orderByCreationDatePipe.transform(users);
    var cards: Card[] = usersData.map(x => ({
      title: 'User: ' + this.fullNamePipe.transform(x.firstName, x.lastName),
      description: 'Age: ' + x.age + ' Date of Creation: ' + this.datePipe.transform(x.dateOfCreation, "MM/dd/yyyy"),
      additionalInfo: ' Gender: ' + Gender[x.gender]
    }))
    return cards;
  }
}
