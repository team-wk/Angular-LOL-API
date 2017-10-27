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

  getDataFromJson(name: string): Promise<any> {
    let fileName = "../assets/data/gameinfo-" + name + ".json";
    return this.http.get(fileName).toPromise().then((response) => {
      console.log('* JSON filename: ' + fileName)
      return response;
    });
  };
}
