import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card-module/card/card.model';
import { UserMapService } from './user-map.service';

@Component({
  selector: 'app-user-list-main',
  templateUrl: './user-list-main.component.html',
  styleUrls: ['./user-list-main.component.css']
})
export class UserListMainComponent implements OnInit {
  users: Array<Card> = [];

  constructor(private dataService: UserMapService) { }

  ngOnInit() {
    this.users = this.dataService.usersCards;
  }

}
