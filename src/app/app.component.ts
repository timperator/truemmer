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
    { viewValue: 'raid_dxun', complexity: 8 },
    { viewValue: 'raid_ev', complexity: 1 },
    { viewValue: 'raid_gods', complexity: 10 },
    { viewValue: 'raid_denova', complexity: 7 },
    { viewValue: "raid_karagga", complexity: 1 },
    { viewValue: 'raid_darvannis', complexity: 4 },
    { viewValue: 'raid_temple', complexity: 6 },
    { viewValue: 'raid_asation', complexity: 4 },
    { viewValue: 'raid_deepstation', complexity: 8 },
    { viewValue: 'raid_df', complexity: 5 },
    { viewValue: 'raid_dp', complexity: 6 },
    { viewValue: 'raid_rishi', complexity: 6 },
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
