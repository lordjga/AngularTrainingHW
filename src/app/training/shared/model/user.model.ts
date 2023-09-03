export interface User {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    company: string,
    email: string,
    gender: Gender,
    department: string,
    activated: boolean,
    dateOfCreation: Date,
    salary: number,
    addressesGroup: { addresses: Address[] }
}

export enum Gender {
    male = 0,
    female = 1
}

export const departments: Array<string> = ['FE', 'BE', 'Mobile', 'QA']

export interface Address {
    addressLine: string,
    city: string,
    zip: string
}
