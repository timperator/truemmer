import { Component, Inject, inject } from '@angular/core';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { TruemmerdialogComponent } from './truemmerdialog/truemmerdialog.component';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(public dialog: MatDialog, @Inject(DOCUMENT) private document: Document) {
    if (localStorage.getItem('dark-theme') === 'false') {
      this.document.body.classList.remove('dark-theme');
    }
  }

  darkTheme = true;
  language = 'de';
  translateService = inject(TranslateService);

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
      localStorage.setItem('dark-theme', 'false');
    } else {
      this.document.body.classList.add('dark-theme');
      localStorage.setItem('dark-theme', 'true');
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

  setLanguage(language: string) {
    if (language && this.translateService) {
      if ('de' == language) {
        this.translateService.use('de');
        this.language = 'de';
      } else if ('en' == language) {
        this.translateService.use('en');
        this.language = 'en';
      } else {
        console.error("Language not supported: " + language);
      }
    } else {
      console.log("Unable to set language");
    }
  }

  isLanguage(language: string) {
    return this.language == language;
  }

}
