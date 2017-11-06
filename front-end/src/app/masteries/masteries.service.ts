import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MasteriesService {
  private url = 'http://localhost:4300/masteries';

  constructor(private http: HttpClient) {
  }

  getMasteries(): Promise<any> {
    return this.http.get(this.url).toPromise().then((response) => {
      return response;
    });
  }

  getMastery(id: string): Promise<any> {
    return this.http.get(this.url + '/' + id).toPromise().then((response) => {
      return response;
    });
  }
}
