import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { Champion } from './champion';

@Injectable()
export class AppService {
  private url = 'http://localhost:4300/champions';

  constructor(private http: HttpClient) {
  }

  getChampions(): Promise<Champion[]> {
    return this.http.get(this.url).toPromise().then((response) => {
      return response;
    });
  }

  setChampion(data: Champion): Promise<any> {
    return this.http.post(this.url, data).toPromise()
  }

  deleteChampion(id: string): Promise<any> {
    return this.http.delete(this.url + '/' + id).toPromise()
  }
}
