import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { UserMapService } from "./user-map.service";
import { User } from "../../shared/model/user.model";

@Injectable({
    providedIn: 'root'
})

export class UserApiService {

    constructor(private httpClient: HttpClient, private userMapService: UserMapService) { }

    public getRandomUsers(): Observable<User[]> {
        return this.httpClient.get("https://randomuser.me/api/?results=10")
                                .pipe(map(result=>this.userMapService.convertRequestToUsers(result)));
    }
}
