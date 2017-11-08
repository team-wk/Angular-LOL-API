import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {IConfirmDialogData} from './Iconfirm-dialog-data';

@Component({
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  confirmDialogData: IConfirmDialogData = {
    message: '',
    parentComponentFunction: null
  };

  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IConfirmDialogData) {
    this.confirmDialogData.message = data.message;
    this.confirmDialogData.parentComponentFunction = data.parentComponentFunction;
  }

  setConfirm(confirm: boolean) {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(() => {
      this.confirmDialogData.parentComponentFunction(confirm);
    });
  };
}
