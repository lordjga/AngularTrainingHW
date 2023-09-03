import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Card } from '../shared/card-module/card/card.model';
import { Address, Gender, User } from '../shared/model/user.model';
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
            id: x.id,
            title: 'User: ' + this.fullNamePipe.transform(x.firstName, x.lastName),
            description: 'Age: ' + x.age + ', Gender: ' + Gender[x.gender] + ', Email: ' + x.email,
            additionalInfo: 'Date of Creation: ' + this.datePipe.transform(x.dateOfCreation, "MM/dd/yyyy")
                + '<br/>' + 'Company: ' + x.company + ', Department: ' + x.department + ', Salary: ' + x.salary
                + this.addAddresses(x.addressesGroup.addresses)
        }))
        return cards;
    }

    addAddresses(addresses: Address[]): string {
        let s: string = '';
        addresses.forEach(function(value) {
            s += '<br/>' +  'Address Line: ' + value.addressLine + (value.city.length > 0 ? (' City : ' + value.city + ' Zip : ' + value.zip) : '')
        });

        return s;
    }
}
