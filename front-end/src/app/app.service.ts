import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { API_KEY } from './API_KEY';
import { UsersData } from './usersData';

@Injectable()
export class AppService {
  // private url = 'https://na1.api.riotgames.com/lol/platform/v3/champions?api_key=' + API_KEY.key;
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsersData(): Promise<UsersData[]> {
    return this.http.get(this.url).toPromise().then((response) => {
      return response;
    });
  }
}
