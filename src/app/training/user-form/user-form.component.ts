import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
    private userService: UserService) { }

  public userFormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl(0, [Validators.required, Validators.min(15), Validators.max(100)]),
    company: new FormControl('', [Validators.maxLength(35)]),
    email: new FormControl('', [Validators.required, Validators.email, this.gmailDomainValidator()], [this.uniqEmailValidator()]),
    department: new FormControl(),
    gender: new FormControl(Gender.male, [Validators.required]),
    activated: new FormControl()
  })

  public getFormGroupValue(): void {
    console.log('Form Group Raw value:', this.userFormGroup.getRawValue())

    if (!this.userFormGroup.invalid) {
      this.userService.AddNewUser(this.convertFormGroupToUser());
      this.redirectToUserListPage();
    }
    else {
      this.validateForm();
    }
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

  validateForm() {
    if (this.userFormGroup.invalid) {
      this.userFormGroup.markAllAsTouched();
      return;
    }
  }

  gmailDomainValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      return !control.value.toString().includes('@gmail.com') ? { gmailDomain: true } : null;
    }
  }

  uniqEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return this.userService.getUserDataAsync().then(
        users => {
          return users.some(x => x.email == control.value.toString()) ? { uniqEmail: true } : null;
        }
      );
    }
  }
}
