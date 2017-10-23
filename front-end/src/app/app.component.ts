import { Component } from '@angular/core';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { Champion } from './champion';

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
}
