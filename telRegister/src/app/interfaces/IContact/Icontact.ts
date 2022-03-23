import { IAddress } from "./IAddress";
import { IPassport } from "./IPassportData";

export interface IContact{
  id:number;
  telephone:string;
  passportData:IPassport;
  address?:IAddress;
}
