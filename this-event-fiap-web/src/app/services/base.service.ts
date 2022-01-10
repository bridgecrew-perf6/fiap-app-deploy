import Axios from 'axios';
import services from '../../consts'

export class BaseService {
  baseUrl: string;
  http: any;

  constructor(api_url=services.api, http=Axios) {
    this.baseUrl = api_url
    this.http = http.create({
      baseURL: this.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export class AuthService {
  baseUrl: string;
  http: any;

  constructor(api_url=services.auth, http=Axios) {
    this.baseUrl = api_url
    this.http = http.create({
      baseURL: this.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}