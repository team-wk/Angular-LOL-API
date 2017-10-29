import {Component} from "@angular/core";

@Component({
  selector: 'helloworld',
  templateUrl: './helloworld.component.html'
})

export class HelloWorldComponent {
  title = 'Patryk';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  isShow = true;
  kliknietaLiczba: number;
  textFromInput = 5;

  changeTitle() {
    this.title = 'Luki';
  }

  kliknalemNa(tmp: number) {
    this.kliknietaLiczba = tmp;
  }

  delete(index: number) {
    this.array2.splice(index, 1);
  }

  add() {
    const tmp = this.array2.length;
    this.array2.push(tmp + 1);
  }

  addFromInput() {
    this.array2.push(this.textFromInput);
  }
}
