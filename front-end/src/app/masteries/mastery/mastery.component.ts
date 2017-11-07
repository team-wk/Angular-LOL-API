import {Component, Inject, OnInit} from '@angular/core';
import {MasteriesService} from '../masteries.service';
import {Mastery} from '../mastery';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Alert} from '../../alert/alert';

@Component({
  selector: 'mastery',
  templateUrl: './mastery.component.html',
  styleUrls: ['./mastery.component.scss']
})

// TODO: crud
export class MasteryComponent implements OnInit{
  mastery: Mastery;
  private imgPath = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/mastery/';

  constructor(private masteriesService: MasteriesService,
              public dialogRef: MatDialogRef<MasteryComponent>,
              @Inject(MAT_DIALOG_DATA) private masteryId: any,
              private alert: Alert) {
  }

  ngOnInit() {
    this.masteriesService.getMastery(this.masteryId).then(mastery => {
      this.mastery = mastery;
      this.setImgPath();
      this.alert.showAlert('Correctly load mastery ' + this.masteryId + ' from server.');
    });
  }

  // TODO: util
  private setImgPath() {
    this.mastery.image.full = this.imgPath + this.mastery.image.full;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
