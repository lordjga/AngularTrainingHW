import { Component, Input } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.css']
})
export class UserListViewComponent {
  @Input() users: Array<User> = [];

  label: string = 'User list View Component';
  public isShowOnlyActivated = false;

  delete(user: User) {
    delete this.users[this.users.indexOf(user)];
  }

  isShowUser(isUserActivated: boolean): boolean {
    return !this.isShowOnlyActivated || (this.isShowOnlyActivated && isUserActivated);
  }
}
