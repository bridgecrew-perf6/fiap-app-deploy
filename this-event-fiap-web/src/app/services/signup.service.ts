import { Injectable } from '@angular/core';
import Axios from 'axios';
import { IUser } from '../interfaces/user';
import { BaseService } from './base.service';
import services from '../../consts'

@Injectable({
  providedIn: 'root'
})
export class SignUpService extends BaseService {

  constructor() {
    super(services.signup, Axios)
  }

  signup(user: IUser) {
    const response = this.http.post('/users', user)
    return response
  }

}
