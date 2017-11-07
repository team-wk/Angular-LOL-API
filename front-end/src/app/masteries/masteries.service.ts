import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Alert} from '../alert/alert';

@Injectable()
export class MasteriesService {
  private url = 'http://localhost:4300/masteries';

  constructor(private http: HttpClient, private alert: Alert) {
  }

  getMasteries(): Promise<any> {
    return this.http.get(this.url).toPromise().then((response) => {
      this.alert.showAlert('Masteries successfully get.');
      return response;
    });
  }

  getMastery(id: string): Promise<any> {
    return this.http.get(this.url + '/' + id).toPromise().then((response) => {
      this.alert.showAlert('Mastery [' + id +  '] successfully get.');
      return response;
    });
  }

  deleteMastery(id: string): Promise<any> {
    return this.http.delete(this.url + '/' + id).toPromise().then((response) => {
      this.alert.showAlert('Mastery [' + id +  '] successfully delete.');
      return response;
    });
  }
}
