import { Component, Inject, Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

    constructor(private _bottomSheet: MatBottomSheet) { }

    openBottomErrorSheet(message: string): void {
        this._bottomSheet.open(BottomErrorSheet, {
            data: { message: message },
        });
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errorMsg = '';
                    if (error.error instanceof ErrorEvent) {
                        console.log('This is client side error');
                        errorMsg = `Error: ${error.error.message}`;
                        this.openBottomErrorSheet(errorMsg);
                    } else {
                        console.log('This is server side error');
                        errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                        this.openBottomErrorSheet(errorMsg);
                    }
                    console.log(errorMsg);
                    
                    return throwError(() => errorMsg);
                })
            )
    }
}

@Component({
    template: '<span>{{_message}}</span>',
    standalone: true,
})
export class BottomErrorSheet {
    _message: string;
    constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { message: string }) {
        this._message = this.data.message
    }

}
