import { Injectable } from '@angular/core';
import { ILogin } from '../interfaces/login';
import { IUser } from '../interfaces/user';
import { AuthService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends AuthService {

  signin(user: ILogin) {
    const response = this.http.post('/signin', user)
    return response
  }

}
