import {Component, OnInit} from '@angular/core';
import {MasteriesService} from './masteries.service';
import {Mastery} from './mastery';

@Component({
  selector: 'masteries',
  templateUrl: './masteries.component.html',
  styleUrls: ['./masteries.component.scss']
})

export class MasteriesComponent implements OnInit {
  masteries: Mastery[];
  private imgPath = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/mastery/';

  constructor(private masteriesService: MasteriesService) {
  }

  ngOnInit() {
    this.getMasteries();
  }

  getMasteries() {
    this.masteriesService.getMasteries().then((masteries) => {
      this.masteries = masteries;
      this.setImgPath();
    });
  }

  private setImgPath() {
    this.masteries.forEach(mastery => {
      mastery.image.full = this.imgPath + mastery.image.full;
    })
  }
}
