import { Component } from '@angular/core';
import { AppService } from './app.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private url = 'http://localhost:4300/';

  apiSpec: {
    key: string,
    jsonItems: number,
    dbItems: number
  }[] = [
    {key: 'champions', jsonItems: 0, dbItems: 0},
    {key: 'items', jsonItems: 0, dbItems: 0}
  ];

  constructor(private appService: AppService) {
    this.apiSpec.forEach((item) => {
      this.appService.getDataFromJson(item.key).then((response) => {
        item.jsonItems = response.length;
      });
    });

    this.apiSpec.forEach((item) => {
      this.appService.getData(this.url + item.key).then((response) => {
        item.dbItems = response.length;
      });
    });
  }

  restoreDb(key: string) {
    console.log('*** ' + key);
    this.fillDbFromJson(key);
  }

  private fillDbFromJson(name: string) {
    let apiUrl = this.url + name;

    console.log('* Delete all ' + name + ' from db');
    this.deleteAllDataFromDb(apiUrl);

    console.log('* Send data from JSON ' + name + ' to db');
    this.sendDataFromJsonToDb(apiUrl, name);
  }

  private deleteAllDataFromDb(url: string) {
    this.appService.getData(url).then((response) => {
      response.forEach(item => {
          this.appService.deleteData(url, item._id);
      });
    });
  };

  private sendDataFromJsonToDb(url: string, name: string) {
    this.appService.getDataFromJson(name).then((response) => {
      response.forEach(item => {
          this.appService.setData(url, item);
      });

      this.logDataFromDb(url);
    });
  };

  private logDataFromDb(url: string) {
    this.appService.getData(url).then((response) => {
      console.log(response);
    });
  };
}
