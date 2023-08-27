import { departments, Gender, User } from "./user.model";


export const usersInitialData: Array<User> = [
    {
        firstName: "Artem1",
        lastName: "Laferchuk1",
        age: 17,
        company: "Issoft",
        email: "artem1@gmail.com",
        gender: Gender.female,
        department: departments[0],
        activated: true,
        dateOfCreation: new Date('2023-07-21'),
        salary: 1000,
        addresses: []
    }
];

