import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UserApiService } from './user-api.service';

export const userResolver: ResolveFn<object> = (route, state) => {
    //inject(UserApiService).getRandomUsers().pipe();
    return Object;
};
