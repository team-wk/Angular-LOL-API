import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Champion } from './champion';

@Injectable()
export class AppService {
  private url = 'http://localhost:4300/champions';

  constructor(private http: HttpClient) {
  };

  getChampions(): Promise<any> {
    return this.http.get(this.url).toPromise().then((response) => {
      return response;
    });
  };

  setChampion(data: Champion): Promise<any> {
    return this.http.post(this.url, data).toPromise();
  };

  deleteChampion(id: string): Promise<any> {
    return this.http.delete(this.url + '/' + id).toPromise();
  };

  editChampion(id: string, newData: Champion): Promise<any> {
    // TODO
    return this.http.put(this.url + '/' + id, newData).toPromise();
  };

  getChampionsJson(): Promise<any> {
    return this.http.get("../assets/data/gameinfo-champions.json").toPromise().then((response) => {
      return response;
    });
  };
}
