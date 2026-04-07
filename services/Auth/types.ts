export interface LoginDto{
    email:string,
    password:string
}

export enum UserType{
    USER="USER",
    DESIGNER="DESIGNER",
    BILLERS="BILLERS",
    ADMIN="ADMIN",
}

export interface User{
    firstname:string,
    lastname:string,
    gender:"MALE" | "FEMALE",
    email:string,
    phone_number:string
    user_type:UserType
}