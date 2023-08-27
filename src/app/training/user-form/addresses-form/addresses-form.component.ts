import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressItem } from '../user-form.component';

@Component({
    selector: 'app-addresses-form',
    templateUrl: './addresses-form.component.html',
    styleUrls: ['./addresses-form.component.scss']
})
export class AddressesFormComponent {
    @Input() form!: FormGroup;

    constructor(private readonly fb: FormBuilder) { }

    get addresses(): FormArray<FormGroup<AddressItem>> {
        return this.form.controls["addresses"] as FormArray;
    }

    public addNewAddress(): void {
        this.addresses.push(this.getEmptyAddressForm());
    }

    public removeAddress(index: number): void {
        this.addresses.removeAt(index);
    }

    private getEmptyAddressForm(): FormGroup<AddressItem> {
        return this.fb.group<AddressItem>({
            city: this.fb.nonNullable.control(''),
            zip: this.fb.nonNullable.control('', [Validators.required]),
            addressLine: this.fb.nonNullable.control('', [Validators.required])
        })
    }
}
