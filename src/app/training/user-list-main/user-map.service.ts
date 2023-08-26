import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Card } from '../shared/card-module/card/card.model';
import { Gender, User } from '../shared/model/user.model';
import { FullNamePipe } from '../shared/pipes/full-name.pipe';
import { OrderByCreationDatePipe } from '../shared/pipes/order-by-creation-date.pipe';

@Injectable({
  providedIn: 'root'
})
export class UserMapService {

  constructor(
    private fullNamePipe: FullNamePipe,
    private orderByCreationDatePipe: OrderByCreationDatePipe,
    private datePipe: DatePipe) { }

  public convertUsersToCards(users: Array<User>): Card[] {
    var usersData = this.orderByCreationDatePipe.transform(users);
    var cards: Card[] = usersData.map(x => ({
      title: 'User: ' + this.fullNamePipe.transform(x.firstName, x.lastName),
      description: 'Age: ' + x.age + ' Date of Creation: ' + this.datePipe.transform(x.dateOfCreation, "MM/dd/yyyy"),
      additionalInfo: ' Gender: ' + Gender[x.gender]
    }))
    return cards;
  }
}
