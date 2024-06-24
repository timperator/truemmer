import { Component, Inject, Output } from '@angular/core';
import { MatDialog as MatDialog, MatDialogRef as MatDialogRef, MAT_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TruemmerdialogComponent } from './truemmerdialog/truemmerdialog.component';
import { DOCUMENT } from '@angular/common';

interface Raid {
  complexity: number;
  viewValue: string;
}

export interface DialogData {
  truemmerfaktor: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog, @Inject(DOCUMENT) private document: Document) { }

  darkTheme = true;

  complexity = 8;
  trolling = 1;
  skill = 1;
  experience = 1;
  motivation = 1;

  raids: Raid[] = [
    { viewValue: 'The Nature of Progress', complexity: 8 },
    { viewValue: 'Eternity Vault', complexity: 1 },
    { viewValue: 'Gods from the Machine', complexity: 10 },
    { viewValue: 'Explosive Conflict', complexity: 7 },
    { viewValue: "Karagga's Palace", complexity: 1 },
    { viewValue: 'Scum and Villainy', complexity: 4 },
    { viewValue: 'Temple of Sacrifice', complexity: 6 },
    { viewValue: 'Terror from Beyond', complexity: 4 },
    { viewValue: 'The R-4 Anomaly', complexity: 8 },
    { viewValue: 'The Dread Fortress', complexity: 5 },
    { viewValue: 'The Dread Palace', complexity: 6 },
    { viewValue: 'The Ravagers', complexity: 6 },
  ];

  setDarkTheme(darkTheme: boolean) {
    this.darkTheme = !darkTheme;
    if (this.document?.body.classList.contains('dark-theme')) {
      this.document.body.classList.remove('dark-theme');
    } else {
      this.document.body.classList.add('dark-theme');
    }
  }

  showTruemmerDialog(): void {
    const dialogRef = this.dialog.open(TruemmerdialogComponent, {
      data: { truemmerfaktor: this.calculateTruemmer() },
    });
  }

  calculateTruemmer() {
    return (((this.complexity + this.trolling) / (this.skill + this.experience)) * (11 - this.motivation)).toFixed(1);
  }

}
