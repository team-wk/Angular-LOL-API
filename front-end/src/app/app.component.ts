import { Component } from '@angular/core';
import { AppService } from './app.service';

import { UsersData } from './usersData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular LOL API';
  usersData: any;

  constructor(private appService: AppService) {}

  displayUsers() {
    this.appService.getUsersData().then((response) => {
      this.usersData = response;
    });
  }
}
