import { Customer } from "../models/Customer";
import { User } from "../models/User";

export class UserResponse{
  user: User = new User();
  token?: string = '';
  userInfo:Customer = new Customer();
}
