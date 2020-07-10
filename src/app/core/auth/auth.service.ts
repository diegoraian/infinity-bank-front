import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {UserService} from '../user/user.service';
const API_END_POINT = 'http://localhost:8080';
@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) { }

  authenticate(agency: String, account: String, password: String){
    return this.http.post(
      API_END_POINT+ '/auth',
      { agency,account, password}
      ).pipe(tap(response => {
        //const authToken = response.headers.get('Authorization');
        //this.userService.setToken(authToken);
      }));
  }
}
