

export enum Role{
    ADMIN = 1,
    CLIENT = 2,
    GUEST = 3,
}

export class ClientModel {
    _id:string;
    first_name:string;
    last_name:string;
    email:string;
    id_num:number;
    password:string;
    city:string;
    street:string;
    role:number;


}
