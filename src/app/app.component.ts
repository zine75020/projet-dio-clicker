import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgIf } from '@angular/common';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DialogBox } from './dialog';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ReplaySubject } from 'rxjs';
import {MatToolbarModule} from '@angular/material/toolbar';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dialogObj: MatDialogRef<DialogBox>;
  constructor(private dialog: MatDialog) { }
  // tslint:disable-next-line: variable-name
  global_count = 0;
  // tslint:disable-next-line: variable-name
  global_pouvoir1On = false;
  // tslint:disable-next-line: variable-name
  global_pouvoir2On = false;
  // tslint:disable-next-line: variable-name
  global_pouvoir3On = false;
  // tslint:disable-next-line: variable-name
  global_pouvoir4On = false;
  openDialog() {
    this.dialogObj = this.dialog.open(DialogBox);
  }
  timer500(){
    setInterval(() => {
      this.global_count += 500;
      }, 5000);
  }
  timer5000(){
    setInterval(() => {
      this.global_count += 5000;
      }, 1000);
  }
pouvoir_1() {
  if (this.global_count > 5) {
    this.global_pouvoir1On = true;
  }
  else {
    this.openDialog();
  }
}
pouvoir_2() {
  if (this.global_count > 50) {
    this.global_pouvoir2On = true;
  }
  else {
    this.openDialog();
  }
}
pouvoir_3(){
  if (this.global_count > 500) {
    this.global_pouvoir3On = true;
  }
  else {
    this.openDialog();
  }
}
pouvoir_4(){
  if (this.global_count > 5000){
    this.global_pouvoir4On = true;
  }
}
onClick() {
  this.global_count += 1;
  if (this.global_pouvoir1On === true) {
    this.global_count += 2;
  }
  if (this.global_pouvoir2On === true) {
    this.global_count += 100;
  }
  if (this.global_pouvoir3On === true) {
    this.timer500();
  }
  if (this.global_pouvoir4On === true) {
    this.timer5000();
  }
}

}


