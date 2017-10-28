import { Component } from '@angular/core';
import { DbmanagementService } from './dbmanagement.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'dbmanagement',
  templateUrl: './dbmanagement.component.html',
})
export class DbmanagementComponent {
  private url = 'http://localhost:4300/';
  showProgressBar = false;

  apiSpec: {
    key: string,
    jsonItems: number,
    dbItems: number
  }[] = [
    {key: 'champions', jsonItems: 0, dbItems: 0},
    {key: 'items', jsonItems: 0, dbItems: 0},
    {key: 'masteries', jsonItems: 0, dbItems: 0}
  ];

  constructor(private dbmanagementService: DbmanagementService) {

  }

  getItemsInfo() {
    this.showProgressBar = true;
    this.apiSpec.forEach((item) => {
      this.dbmanagementService.getDataFromJson(item.key).then((response) => {
        item.jsonItems = response.length;
      });
    });

    this.apiSpec.forEach((item) => {
      this.dbmanagementService.getData(this.url + item.key).then((response) => {
        item.dbItems = response.length;
        this.showProgressBar = false;
      });
    });
  }

  restoreDb(key: string) {
    this.showProgressBar = true;
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
    this.dbmanagementService.getData(url).then((response) => {
      response.forEach(item => {
          this.dbmanagementService.deleteData(url, item._id);
      });
    });
  };

  private sendDataFromJsonToDb(url: string, name: string) {
    this.dbmanagementService.getDataFromJson(name).then((response) => {
      response.forEach(item => {
          this.dbmanagementService.setData(url, item);
      });

      this.logDataFromDb(url);
    });
  };

  private logDataFromDb(url: string) {
    this.dbmanagementService.getData(url).then((response) => {
      console.log(response);
      this.showProgressBar = false;
    });
  };
}
