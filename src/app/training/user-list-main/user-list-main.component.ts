import { Component, OnInit } from '@angular/core';
import { User, Gender } from './model/user.model';
import { OrderByCreationDatePipe } from '../shared/pipes/order-by-creation-date.pipe';
import { users } from './model/user-data';

@Component({
  selector: 'app-user-list-main',
  templateUrl: './user-list-main.component.html',
  styleUrls: ['./user-list-main.component.css']
})
export class UserListMainComponent implements OnInit {
  users: Array<User> = [];

  constructor(private orderByCreationDatePipe: OrderByCreationDatePipe) {
  }

  ngOnInit(){
    this.users = this.orderByCreationDatePipe.transform(users);
  }

}
