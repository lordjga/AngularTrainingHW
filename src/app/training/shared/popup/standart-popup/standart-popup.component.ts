import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { StandartPopupData } from './standart-popup.model';

@Component({
    selector: 'app-standart-popup',
    templateUrl: './standart-popup.component.html',
    styleUrls: ['./standart-popup.component.scss'],
    standalone: true,
    imports: [MatDialogModule, NgIf, MatButtonModule],
})
export class StandartPopupComponent {
    constructor(public dialogRef: MatDialogRef<StandartPopupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: StandartPopupData) { }
}
