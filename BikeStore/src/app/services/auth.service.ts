import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASEAPIURL } from 'src/assets/Settings';
import { UserRequest } from '../domain-model/Requests/UserRequest';
import { UserLoginResponse } from '../domain-model/Responses/UserLoginResponse';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public login(userRequest:UserRequest):Observable<string> {
    let url = BASEAPIURL + '/Auth/login';
    return this.httpClient.post(url, userRequest,{
        responseType: 'text',
        headers: {
          'Content-Type': 'application/json'
        }
    });
    // }) as Observable<UserLoginResponse>;
  }
}
