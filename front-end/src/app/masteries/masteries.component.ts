import {Component, OnInit} from '@angular/core';
import {MasteriesService} from './masteries.service';
import {Mastery} from './mastery';
import {MatDialog} from '@angular/material';
import {MasteryComponent} from './mastery/mastery.component';
import {Alert} from '../alert/alert';

@Component({
  selector: 'masteries',
  templateUrl: './masteries.component.html',
  styleUrls: ['./masteries.component.scss']
})

export class MasteriesComponent implements OnInit {
  masteries: Mastery[];
  private imgPath = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/mastery/';

  constructor(private masteriesService: MasteriesService, public dialog: MatDialog, private alert: Alert) {
  }

  ngOnInit() {
    this.getMasteries();
  }

  getMasteries() {
    this.masteriesService.getMasteries().then((masteries) => {
      this.masteries = masteries;
      this.setImgPath();
      this.alert.showAlert('Correctly load masteries from server.');
    });
  }

  openMasteryDetails(masteryId) {
    this.dialog.open(MasteryComponent, {
      data: masteryId
    });
  }

  private setImgPath() {
    this.masteries.forEach(mastery => {
      mastery.image.full = this.imgPath + mastery.image.full;
    })
  }
}
