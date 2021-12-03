import { Component, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TruemmerdialogComponent } from './truemmerdialog/truemmerdialog.component';

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

  constructor(public dialog: MatDialog) {}
  
  complexity = 8;
  trolling = 1;
  skill = 1;
  experience = 1;
  motivation = 1;

  raids: Raid[] = [
    { viewValue: 'The Nature of Progress', complexity: 9 },
    { viewValue: 'Eternity Vault', complexity: 1 },
    { viewValue: 'Gods from the Machine', complexity: 10 },
    { viewValue: 'Explosive Conflict', complexity: 5 },
    { viewValue: "Karagga's Palace", complexity: 1 },
    { viewValue: 'Scum and Villainy', complexity: 5 },
    { viewValue: 'Temple of Sacrifice', complexity: 7 },
    { viewValue: 'Terror from Beyond', complexity: 4 },
    { viewValue: 'The Dread Fortress', complexity: 8 },
    { viewValue: 'The Dread Palace', complexity: 7 },
    { viewValue: 'The Ravagers', complexity: 6 },
  ];

  showTruemmerDialog(): void {
    const dialogRef = this.dialog.open(TruemmerdialogComponent, {
      data: {truemmerfaktor: this.calculateTruemmer() },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  calculateTruemmer() {
    return (((this.complexity + this.trolling) / (this.skill + this.experience)) * (11 - this.motivation)).toFixed(1);
  }

}
