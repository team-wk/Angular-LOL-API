
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ChampionsService {
  private url='http://localhost:4300/champions';
  constructor(private http:HttpClient){
  }

  getChampions():Promise<any>{
    return this.http.get(this.url).toPromise().then((response) => {
      return response;
    });
  }
}
