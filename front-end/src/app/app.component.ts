import { Component } from '@angular/core';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { UsersData } from './usersData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular LOL API';
  usersData: UsersData[];
  testNameInput: string;

  constructor(private appService: AppService) {}

  displayUsers() {
    this.appService.getUsersData().then((response) => {
      this.usersData = response;
    });
  }

  setTestUser() {
    this.appService.setUsersData(this.testNameInput);
  }
}
