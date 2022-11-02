import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASEAPIURL } from 'src/assets/Settings';
import { UserRegisterRequest } from '../domain-model/Requests/UserRegisterRequest';
import { UserLoginRequest } from '../domain-model/Requests/UserRequest';
import { UserResponse } from '../domain-model/Responses/UserInfo';
import { UserRegisterResponse } from '../domain-model/Responses/UserRegisterResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public login(userRequest: UserLoginRequest): Observable<string> {
    let url = BASEAPIURL + '/Auth/login';
    return this.httpClient.post(url, userRequest, {
      responseType: 'text',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public register(
    userRequest: UserRegisterRequest
  ): Observable<UserRegisterResponse> {
    let url = BASEAPIURL + '/Auth/register';
    return this.httpClient.post<UserRegisterResponse>(url, userRequest, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  public getUserInfo(): Observable<UserResponse> {
    let url = BASEAPIURL + '/Auth';
    return this.httpClient.get<UserResponse>(url);
  }
}
