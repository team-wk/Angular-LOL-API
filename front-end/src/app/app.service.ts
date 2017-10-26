import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {
  };

  getData(url: string): Promise<any> {
    return this.http.get(url).toPromise().then((response) => {
      return response;
    });
  };

  setData(url: string, data: any): Promise<any> {
    return this.http.post(url, data).toPromise();
  };

  deleteData(url: string, id: string): Promise<any> {
    return this.http.delete(url + '/' + id).toPromise();
  };

  getDataFromJson(): Promise<any> {
    // TODO: zmiana json
    return this.http.get("../assets/data/gameinfo-champions.json").toPromise().then((response) => {
      return response;
    });
  };
}
