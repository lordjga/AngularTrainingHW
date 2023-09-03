import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { Address, departments, Gender, User } from '../shared/model/user.model';
import { UserService } from '../shared/model/user.service';
import { StandartPopupComponent } from '../shared/popup/standart-popup/standart-popup.component';
import { AddressesFormComponent } from './addresses-form/addresses-form.component';

export interface AddressItem {
    city: FormControl<string>;
    zip: FormControl<string>;
    addressLine: FormControl<string>;
}

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],

})
export class UserFormComponent implements AfterViewInit {
    departments = departments;
    Gender = Gender;
    GenderValues = Object.values(Gender).filter(e => typeof (e) !== 'number');

    public isEditMode = false;

    public userIdRouteParam: string | null = null;
    private componentActive: boolean = true;
    private currentUser: User | undefined;
    private canGo = false;

    public userFormGroup = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        age: new FormControl(0, [Validators.required, Validators.min(15), Validators.max(100)]),
        company: new FormControl('', [Validators.maxLength(35)]),
        email: new FormControl('', [Validators.required, Validators.email, this.gmailDomainValidator()], [this.uniqEmailValidator()]),
        department: new FormControl(),
        gender: new FormControl(Gender.male, [Validators.required]),
        activated: new FormControl(),
        addressesGroup: new FormGroup({ addresses: new FormArray<FormGroup<AddressItem>>([]) })
    })

    @ViewChild(AddressesFormComponent) addressForm!: AddressesFormComponent;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private userService: UserService) {

        this.route.paramMap
            .pipe(takeWhile(_ => this.componentActive))
            .subscribe(routeParams => this.userIdRouteParam = routeParams.get('userId'));
        var snapshot = route.snapshot;
        this.isEditMode = snapshot.data['isEditMode'];
    }

    ngAfterViewInit(): void {
        if (this.isEditMode && this.userIdRouteParam) {
            this.userService.getUserById(+this.userIdRouteParam).then(
                user => {
                    if (user) {
                        this.currentUser = user;
                        this.patchValueToForm(user);
                    }
                }
            );
        }
    }

    public async getCanGoFromPage(): Promise<boolean> {
        let bool = true;
        if (this.userFormGroup.dirty) {
            bool = await this.openPopup();
        }
        return bool;
    }

    public resetForm() {
        if (this.userFormGroup.dirty) {
            this.userFormGroup.reset();
            if (this.isEditMode && this.currentUser) {
                this.patchValueToForm(this.currentUser);
            }
        }
        this.userFormGroup.markAsPristine();
    }

    public patchValueToForm(user: User) {
        this.userFormGroup.patchValue(<Partial<User>>user);
        this.addressForm.removeAllAddresses();

        user?.addressesGroup.addresses.forEach(address => {
            this.addressForm.addExistsAddress(address);
        });
    }

    public saveForm(): void {
        console.log('Form Group Raw value:', this.userFormGroup.getRawValue())

        if (!this.userFormGroup.invalid) {
            if (this.isEditMode)
                this.userService.UpdateUser(this.convertFormGroupToUser());

            this.userService.AddNewUser(this.convertFormGroupToUser());

            this.redirectToUserListPage();
        }
        else {
            this.validateForm();
        }
    }

    get addressesGroup(): FormGroup {
        return this.userFormGroup.controls["addressesGroup"] as FormGroup;
    }

    private convertFormGroupToUser(): User {
        let form = this.userFormGroup.value;
        let user: User = {
            id: this.currentUser && this.isEditMode ? this.currentUser.id : 0,
            firstName: form.firstName as string,
            lastName: form.lastName as string,
            age: form.age as number,
            company: form.company as string,
            email: form.email as string,
            department: form.department as string,
            gender: form.gender as Gender,
            activated: form.activated as boolean,
            dateOfCreation: new Date(),
            salary: 0,
            addressesGroup: form.addressesGroup as { addresses: Address[] }
        };

        return user;
    }

    private redirectToUserListPage(): void {
        this.router.navigate(['user-list'])
    }

    private openPopup(): Promise<boolean> {
        const dialogRef = this.dialog.open(StandartPopupComponent, {
            data: {
                title: 'You have unsaved data',
                message: 'Are you sure you want to leave this page without saving?',
            },
        });
        return dialogRef.afterClosed().toPromise().then(result => { return Promise.resolve(result) });
    }

    //"validation region"
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
            return !this.isEditMode
                ? this.userService.getUserDataAsync().then(
                    users => {
                        return users.some(x => x.email == control.value.toString()) ? { uniqEmail: true } : null;
                    }
                )
                : this.userService.getUserDataAsync().then(
                    users => {
                        return users.some(x => x.id != this.currentUser?.id && x.email == control.value.toString()) ? { uniqEmail: true } : null;
                    }
                )
        }
    }
}
