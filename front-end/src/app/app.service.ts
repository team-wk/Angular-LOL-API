import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { API_KEY } from './API_KEY';
import { UsersData } from './usersData';

@Injectable()
export class AppService {
  private url = 'http://localhost:4300/tasks';

  constructor(private http: HttpClient) {
  }

  getUsersData(): Promise<any> {
    return this.http.get(this.url).toPromise().then((response) => {
      return response;
    });
  }

  setUsersData(data: any): Promise<any> {
    let tmp = {
      name: data
    }
    return this.http.post(this.url, tmp).toPromise()
  }
}
