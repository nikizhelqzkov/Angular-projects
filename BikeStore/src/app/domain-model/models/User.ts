export class User{
    userId:number= 0;
    username:string = '';
    passwordHash:Int8Array[] = [];
    passwordSalt:Int8Array[] = [];
    customerId:number = 0;
}
