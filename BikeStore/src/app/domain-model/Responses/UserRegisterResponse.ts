import { Customer } from '../models/Customer';
import { User } from '../models/User';

export class UserRegisterResponse {
  User: User = new User();
  UserInfo: Customer = new Customer();
}
