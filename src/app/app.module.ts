import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrainingModule } from './training/training.module';
import { TrainingRoutingModule } from './training/core/routing/training-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorCatchingInterceptor } from './training/core/services/error-catching.interceptor';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        TrainingRoutingModule,
        BrowserAnimationsModule,
        TrainingModule,
        MatBottomSheetModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorCatchingInterceptor,
            multi: true
        }
    ]
})
export class AppModule { }
