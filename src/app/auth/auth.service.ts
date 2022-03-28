import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

import { AuthData } from "./auth-data.model";

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {};

  createUser(fullname: string, email: string, roles: string[], username: string, password: string) {
    const authData: AuthData = { fullname: fullname, email: email, roles: roles, username: username, password: password }
    this.httpClient.post('http://localhost:3000/api/employee/signup', authData)
      .subscribe(res => {
        console.log(res);
      });
  }
}