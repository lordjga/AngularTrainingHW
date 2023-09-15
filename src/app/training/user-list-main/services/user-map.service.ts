import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Card } from '../../shared/card-module/card/card.model';
import { usersInitialData } from '../../shared/model/user-data';
import { Address, Gender, User, departments } from '../../shared/model/user.model';
import { FullNamePipe } from '../../shared/pipes/full-name.pipe';
import { OrderByCreationDatePipe } from '../../shared/pipes/order-by-creation-date.pipe';

@Injectable({
    providedIn: 'root'
})
export class UserMapService {
    departments = departments;
    Gender = Gender;

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
            additionalInfo: 'Date of Creation: ' + this.datePipe.transform(new Date(x.dateOfCreation), "MM/dd/yyyy")
                + '<br/>' + 'Company: ' + x.company + ', Department: ' + x.department + ', Salary: ' + x.salary
                + this.addAddresses(x.addressesGroup.addresses)
        }))
        return cards;
    }

    private addAddresses(addresses: Address[]): string {
        let s: string = '';
        addresses.forEach(function (value) {
            s += '<br/>' + 'Address Line: ' + value.addressLine + (value.city.length > 0 ? (' City : ' + value.city + ' Zip : ' + value.zip) : '')
        });

        return s;
    }

    public convertRequestToUsers(obj: any): Array<User> {
        console.log(obj);

        const [...results] = obj.results;
        const [...users] = results.map(
            (user: any): User => {
                return {
                    id: user.id.value as Number ? user.id.value as number : Math.floor((Math.random() * 100) + 1),
                    firstName: user.name.first,
                    lastName: user.name.last,
                    age: user.dob.age,
                    company: "",
                    email: user.email,
                    gender: Gender[user.gender as keyof typeof Gender],
                    department: departments[0],
                    activated: false,
                    dateOfCreation: user.registered.date,
                    salary: 0,
                    addressesGroup: {
                        addresses: [
                            {
                                addressLine: `${user.location.state}, ${user.location.city}, ${user.location.street.name}, ${user.location.street.number}`,
                                city: user.location.city,
                                zip: user.location.postcode
                            }
                        ]
                    }
                }
            });

        console.log(users);

        return users;
    }
}
//export const usersInitialData2: Array<User> = [
//    {
//        id: 1,
//        firstName: "Artem1",
//        lastName: "Laferchuk1",
//        age: 17,
//        company: "Issoft",
//        email: "artem1@gmail.com",
//        gender: Gender.female,
//        department: departments[0],
//        activated: true,
//        dateOfCreation: new Date('2023-07-21'),
//        salary: 1000,
//        addressesGroup: {
//            addresses: [
//                {
//                    addressLine: "cdsdc",
//                    city: "123",
//                    zip: "bdfbdf"
//                }
//            ]
//        }

//    }
//];

