import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
    styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
    @Input() form!: FormGroup;

    get isZipEnable(): boolean {
        let r = this.form.get('city')?.getRawValue() as string;
        r.length > 0 ? this.form.controls['zip'].enable() : this.form.controls['zip'].disable()
        return r.length > 0;
    }
}
