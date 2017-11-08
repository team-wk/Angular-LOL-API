import {Component, Inject, OnInit} from '@angular/core';
import {MasteriesService} from '../masteries.service';
import {Mastery} from '../mastery';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ConfirmDialogComponent} from '../../confirm-dialog-component/confirm-dialog.component';
import {IConfirmDialogData} from '../../confirm-dialog-component/Iconfirm-dialog-data';

@Component({
  selector: 'mastery',
  templateUrl: './mastery.component.html',
  styleUrls: ['./mastery.component.scss']
})

// TODO: crud
export class MasteryComponent implements OnInit {
  mastery: Mastery;
  masteryId: string;
  masteriesComponentRef: any;
  private imgPath = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/mastery/';

  constructor(private masteriesService: MasteriesService,
              private dialog: MatDialog,
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

  private setMasteryId(id: string) {
    this.masteryId = id;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  confirmDeleteMastery(id: string) {
    let confirmDialogData: IConfirmDialogData = {
      message: 'Czy na pewno chcesz usunąć ' + this.masteryId + ' ?',
      parentComponentFunction: this.deleteMastery.bind(this)
    };

    this.setMasteryId(id);

    this.dialog.open(ConfirmDialogComponent, {
      data: confirmDialogData
    });
  }

  private deleteMastery(confirm: boolean) {
    if (confirm) {

      this.masteriesService.deleteMastery(this.masteryId).then(() => {
        this.dialogRef.close();
        this.masteriesComponentRef.getMasteries();
      });
    }
  }
}
