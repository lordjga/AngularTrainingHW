import { Injectable } from "@angular/core";
import { User } from "../../shared/model/user.model";
import { UserApiService } from "./user-api.service";
import { BehaviorSubject, Observable, from, tap, of, delay } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private users$: BehaviorSubject<User[]> = new BehaviorSubject([] as User[]);
    private users: Array<User> = [];

    public isDataLoaded = false;

    constructor(private userApiService: UserApiService) {
    }

    public getUsersFromServer(){
        this.userApiService.getRandomUsers().subscribe(res => {
            this.users = res;
            this.users$.next(this.users);
            this.isDataLoaded = true;
        });
    }

    get getUserData$(): Observable<User[]> {
        return this.users$.asObservable();
    }

    async getUserDataAsync(): Promise<User[]> {
        return this.users;
    }

    getUserByIdPromise(userId: any): Promise<User | undefined> {
        return this.getUserDataAsync()
            .then(users => users.find(user => user.id === userId));
    }

    getUserByIdObservable(userId: any): Observable<User | undefined> {
        return of(this.getUserById(userId));
    }

    getUserById(userId: any): User | undefined {
        return this.users.find(user => user.id === userId);
    }

    deleteUserById(userId: number): Observable<any> {
        return from(this.getUserByIdPromise(userId))
            .pipe(
                delay(1500),
                tap(user => {
                    if(user){
                        var index = this.users.indexOf(user)
                        if (index > -1) {
                            this.users.splice(index, 1);
                            this.users$.next(this.users);
                        }
                    }
                })
            )
    }

    AddNewUser(user: User): Observable<void> {
        user.id = this.generateId();
        this.users = [...this.users, user];
        return of(this.users$.next(this.users)).pipe(delay(1500));
    }

    UpdateUser(user1: User): Observable<User | undefined> {
        return this.getUserByIdObservable(user1.id).pipe(
            delay(1500), 
            tap(user => {
                if(user){
                    var index = this.users.indexOf(user)
                    if (index > -1) {
                        this.users = [...this.users];
                        this.users[index] = user1;
                        this.users$.next(this.users);
                    }
                }
            }))
        }

    private generateId(): number {
        return this.users.sort(x => x.id).pop()?.id ?? + 1;
    }
}
