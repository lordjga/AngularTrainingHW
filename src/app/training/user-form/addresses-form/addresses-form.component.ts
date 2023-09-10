import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../shared/model/user.model';
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

    public addExistsAddress(address: Address): void {
        let emptyForm = this.getEmptyAddressForm();
        emptyForm.patchValue(<Partial<Address>>address)
        this.addresses.push(emptyForm);
    }

    public removeAddress(index: number): void {
        this.addresses.removeAt(index);
    }

    public removeAllAddresses(): void {
        this.addresses.clear();
    }

    private getEmptyAddressForm(): FormGroup<AddressItem> {
        return this.fb.group({
            city: this.fb.nonNullable.control(''),
            zip: this.fb.nonNullable.control('', [Validators.required]),
            addressLine: this.fb.nonNullable.control('', [Validators.required])
        }, { validators: [addressFormValidator] })
    }
}
export const addressFormValidator = (formGroup: FormGroup<AddressItem>) => {
    const addressLineControl = formGroup.get('addressLine');
    const cityControl = formGroup.get('city');
    const zipControl = formGroup.get('zip');
  
    const options = {onlySelf: true};
    {
        if (cityControl?.value ) {
            zipControl?.enable(options);
        }
    
        if (!cityControl?.value) {
            zipControl?.setValue('', options);
            zipControl?.disable(options);
        }
      } 
  }