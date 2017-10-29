import {Component, OnInit} from '@angular/core';
import {ChampionsService} from './champions.service';
import {Champion} from './champion';

@Component({
  selector: 'champions',
  templateUrl: './champions.component.html'
})

export class ChampionsComponent implements OnInit {
  champions: Champion[];
  championsImagesSrc: string[] = [];

  constructor(private championsService: ChampionsService) {
  }

  ngOnInit() {
    this.getChampions();
  }

  getChampions() {
    this.championsService.getChampions().then((champions) => {
      this.champions = champions;
      this.champions.forEach((champion) => {
        this.championsImagesSrc.push('http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/' + champion.image.full);
      });
    });
  }
}
