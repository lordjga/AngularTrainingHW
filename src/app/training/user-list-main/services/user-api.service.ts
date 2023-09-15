import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UserApiService {

    constructor(private httpClient: HttpClient) { }

    public getRandomUsers(): Observable<any> {
        return this.httpClient.get("https://randomuser.me/api/?results=10");
    }
}
