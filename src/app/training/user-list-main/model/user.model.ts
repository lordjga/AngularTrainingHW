export interface User {
  firstName: string,
  lastName: string,
  age:  number,
  gender: Gender,
  activated: boolean,
  dateOfCreation: Date, 
  salary: number
}

export enum Gender {
  male = 0,
  female = 1
}
