export interface User {
  firstName: string,
  lastName: string,
  age: number,
  company: string,
  email: string,
  gender: Gender,
  department: string,
  activated: boolean,
  dateOfCreation: Date, 
  salary: number
}

export enum Gender {
  male = 0,
  female = 1
}

//export enum Department {
//  FE, BE, Mobile, QA
//}

export const departments: Array<string> = ['FE', 'BE', 'Mobile', 'QA']

