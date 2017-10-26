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
  constructor(private appService: AppService) {
  }
  private url = 'http://localhost:4300/';

  restoreChampions() {
    console.log('CHAMPIONS');
    this.fillDbFromJson('champions');
  }

  restoreItems() {
    console.log('items');
    this.fillDbFromJson('items');
  }

  private fillDbFromJson(name: string) {
    let apiUrl = this.url + name;

    console.log('delete all ' + name + ' from db');
    this.deleteAllDataFromDb(apiUrl);

    console.log('send data from JSON ' + name + ' to db');
    this.sendDataFromJsonToDb(apiUrl);

    console.log('get ' + name + ' from db (' + apiUrl + ')');
    this.logDataFromDb(apiUrl);
  }

  private deleteAllDataFromDb(url: string) {
    this.appService.getData(url).then((response) => {
      response.forEach(item => {
          this.appService.deleteData(url, item._id);
      });
    });
  };

  private sendDataFromJsonToDb(url: string) {
    this.appService.getDataFromJson().then((response) => {
      response.forEach(item => {
          this.appService.setData(url, item);
      });
    });
  };

  private logDataFromDb(url: string) {
    this.appService.getData(url).then((response) => {
      console.log(response);
    });
  };
}
