import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class Alert {

  constructor(private snackBar: MatSnackBar) { }

  showAlert(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 3000,
      horizontalPosition: 'end'
    });
  }
}
