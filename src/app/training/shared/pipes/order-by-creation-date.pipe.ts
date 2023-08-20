import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../user-list-main/model/user.model';

@Pipe({
  name: 'orderByCreationDate'
})
export class OrderByCreationDatePipe implements PipeTransform {

  transform(users: User[]): User[] {
    return users.sort((n1,n2) => n1.dateOfCreation.getTime() - n2.dateOfCreation.getTime());
  }

}
