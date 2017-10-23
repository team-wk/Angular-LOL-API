import { Component } from '@angular/core';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { Champion } from './champion';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular LOL API';
  champions: Champion[];
  newChampion: Champion;

  constructor(private appService: AppService) {
    this.newChampion = new Champion();
  }

  getChampions() {
    this.appService.getChampions().then((response) => {
      this.champions = response;
    });
  }

  setChampion() {
    this.appService.setChampion(this.newChampion);
  }

  deleteChampion(id: string) {
    this.appService.deleteChampion(id);
  }

  editChampion(id: string) {
    this.appService.editChampion(id, this.newChampion);
  }

  fillChampionsFromJson() {
    this.appService.getChampionsJson().then((championsFromJson) => {
      championsFromJson.forEach(champion => {
          this.appService.setChampion(champion);
      });
    });
  }

  deleteAllChampions() {
    this.appService.getChampions().then((champions) => {
      champions.forEach(champion => {
          this.appService.deleteChampion(champion._id);
      });
    });
  }
}
