import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user.model';

@Pipe({
  name: 'orderByCreationDate'
})
export class OrderByCreationDatePipe implements PipeTransform {

  transform(users: User[]): User[] {
      return users.sort((n1, n2) => new Date(n1.dateOfCreation).getTime() - new Date(n2.dateOfCreation).getTime());
  }

}
