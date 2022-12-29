import { Component, Inject } from '@angular/core';
import { MatDialog as MatDialog, MatDialogRef as MatDialogRef, MAT_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../app.component';

@Component({
  selector: 'app-truemmerdialog',
  templateUrl: './truemmerdialog.component.html',
  styleUrls: ['./truemmerdialog.component.scss']
})
export class TruemmerdialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TruemmerdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    playZwirnie(Math.round(data.truemmerfaktor));
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}

function playZwirnie(truemmerfaktor: number) {
  let audio = new Audio();

  if (truemmerfaktor > 20) {
    audio.src = "assets/audio/lachen.mp3";
  } else if (truemmerfaktor > 15) {
    audio.src = "assets/audio/sinnlos.mp3";
  } else if (truemmerfaktor > 10) {
    audio.src = "assets/audio/uff.mp3";
  } else if (truemmerfaktor > 7) {
    audio.src = "assets/audio/aehmja.mp3";
  } else if (truemmerfaktor > 5) {
    audio.src = "assets/audio/stoehnen.mp3";
  } else if (truemmerfaktor > 3) {
    audio.src = "assets/audio/nichtschlecht.mp3";
  } else if (truemmerfaktor > 2) {
    audio.src = "assets/audio/wunderbar.mp3";
  } else if (truemmerfaktor > 1) {
    audio.src = "assets/audio/traeumchen.mp3";
  } else {
    audio.src = "assets/audio/richtiggeil.mp3";
  }

  audio.load();
  audio.play();
}