import { Gender, User } from "./user.model";

export const users: Array<User> = [
    {
      firstName: "Artem1",
      lastName: "Laferchuk1",
      age: 17,
      gender: Gender.female,
      activated: true,
      dateOfCreation: new Date('2024-07-21'),
      salary: 100
    },
    {
      firstName: "Artem2",
      lastName: "Laferchuk2",
      age: 31,
      gender: Gender.female,
      activated: true,
      dateOfCreation: new Date('2024-07-13'),
      salary: 1000
    },
    {
      firstName: "Artem3",
      lastName: "Laferchuk3",
      age: 41,
      gender: Gender.male,
      activated: true,
      dateOfCreation: new Date('2024-07-20'),
      salary: 10000
    },
    {
      firstName: "Artem4",
      lastName: "Laferchuk4",
      age: 15,
      gender: Gender.male,
      activated: true,
      dateOfCreation: new Date('2024-07-27'),
      salary: 200
    }
  ];