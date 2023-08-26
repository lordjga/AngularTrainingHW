import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { departments, Gender, User } from '../shared/model/user.model';
import { UserService } from '../shared/model/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],

})
export class UserFormComponent {
  departments = departments;
   Gender = Gender;
   GenderValues = Object.values(Gender).filter(e => typeof (e) !== 'number');

  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  public userFormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(0),
    company: new FormControl(''),
    email: new FormControl(''),
    department: new FormControl(),
    gender: new FormControl(),
    activated: new FormControl()
  })

  public getFormGroupValue(): void {
    console.log('Form Group Raw value:', this.userFormGroup.getRawValue())
    this.userService.AddNewUser(this.convertFormGroupToUser());
    this.redirectToUserListPage();
  }

  private convertFormGroupToUser(): User {
    let user: User = {
      firstName: this.userFormGroup.get('firstName')?.value as string,
      lastName: this.userFormGroup.get('lastName')?.value as string,
      age: this.userFormGroup.get('age')?.value as number,
      company: this.userFormGroup.get('company')?.value as string,
      email: this.userFormGroup.get('email')?.value as string,
      department: this.userFormGroup.get('department')?.value as string,
      gender: this.userFormGroup.get('gender')?.value as Gender,
      activated: this.userFormGroup.get('activated')?.value as boolean,
      dateOfCreation: new Date(),
      salary: 0
    };

    return user;
  }

  private redirectToUserListPage(): void {
    this.router.navigate(['user-list'])
  }
}
