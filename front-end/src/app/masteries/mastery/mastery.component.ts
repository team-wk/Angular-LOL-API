import {Component, Inject, OnInit} from '@angular/core';
import {MasteriesService} from '../masteries.service';
import {Mastery} from '../mastery';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'mastery',
  templateUrl: './mastery.component.html',
  styleUrls: ['./mastery.component.scss']
})

// TODO: crud
export class MasteryComponent implements OnInit{
  mastery: Mastery;
  masteryId: string;
  masteriesComponentRef: any;
  private imgPath = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/mastery/';

  constructor(private masteriesService: MasteriesService,
              public dialogRef: MatDialogRef<MasteryComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this.masteryId = data['masteryId'];
    this.masteriesComponentRef = data['masteriesComponentRef'];
  }

  ngOnInit() {
    this.masteriesService.getMastery(this.masteryId).then(mastery => {
      this.mastery = mastery;
      this.setImgPath();
    });
  }

  // TODO: util
  private setImgPath() {
    this.mastery.image.full = this.imgPath + this.mastery.image.full;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  deleteMastery(id: string) {
    this.masteriesService.deleteMastery(id).then(() => {
      this.dialogRef.close();
      this.masteriesComponentRef.getMasteries();
    });
  }
}
