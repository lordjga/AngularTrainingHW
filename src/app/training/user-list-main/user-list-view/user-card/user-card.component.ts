import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Gender, User } from '../../model/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit, OnDestroy {
  @Input() user!: User;

  @Output() deleteClick: EventEmitter<number> = new EventEmitter<number>();
  
  @ViewChild('content', { read: ElementRef, static: true }) content: ElementRef | undefined;

  public Gender = Gender;
  public title: string | null = "User card: ";


  ngOnInit(): void {
    console.log(this.user.firstName + " is visible");
  }

  ngOnDestroy(): void {
    console.log(this.user.firstName + " is hidden");
  }

  onSwitchClick() {
    if (this.user) 
      this.user.activated = !this.user.activated;
  }

  onDeleteClick(userId: number) {
    this.deleteClick.emit(userId);
  }

  get getActivated(): string {
    if (this.user) {
      return this.user.activated ? "Activated" : "Deactivated";
    }
    return ' ';
  }

  get getGender(): string {
    if (this.user) 
      return Gender[this.user?.gender];
    return ' ';
  }
}
