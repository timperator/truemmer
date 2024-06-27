import { Component, Inject, OnInit, inject } from '@angular/core';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { TruemmerdialogComponent } from './truemmerdialog/truemmerdialog.component';
import { DOCUMENT } from '@angular/common';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Raid, SelectedRaid } from 'src/model/raid';


export interface DialogData {
  truemmerfaktor: number;
}

import data from '../model/raids.json';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  darkTheme = true;
  language = 'de';
  translateService = inject(TranslateService);
  translationsLoaded = false;

  raids: Raid[] = data;

  raid: SelectedRaid = {
    raid: this.raids[2],
    difficulty: "nim",
    groupSize: "8",
  };

  trolling = 1;
  skill = 1;
  experience = 1;
  motivation = 1;

  constructor(public dialog: MatDialog, @Inject(DOCUMENT) private document: Document, private titleService: Title) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('dark-theme') === 'false') {
      this.document.body.classList.remove('dark-theme');
    }
    this.translateService.onDefaultLangChange.subscribe(() => {
      // workaround for ngx-translate bug with mat-select
      this.translationsLoaded = true;
      this.setTitle();
    });
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setTitle();
    });
  }

  setTitle(): void {
    this.translateService.get('meme_potential').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
  }

  selectedRaidChanged(raid: SelectedRaid) {
    if (raid.difficulty == "nim" && raid.raid.difficulty_nim_8 == null) {
      raid.difficulty = "hm";
    }
    if (raid.groupSize == "16" && raid.raid.difficulty_sm_16 == null) {
      raid.groupSize = "8";
    }
  }

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

  getComplexity(): number {
    console.log("Calculating complexity");
    if (this.raid.groupSize == "8" && this.raid.difficulty == "sm") {
      return this.raid.raid.difficulty_sm_8;
    } else
      if (this.raid.groupSize == "16" && this.raid.difficulty == "sm" && this.raid.raid.difficulty_sm_16) {
        return this.raid.raid.difficulty_sm_16;
      } else
        if (this.raid.groupSize == "8" && this.raid.difficulty == "hm") {
          return this.raid.raid.difficulty_hm_8;
        } else
          if (this.raid.groupSize == "16" && this.raid.difficulty == "hm" && this.raid.raid.difficulty_hm_16) {
            return this.raid.raid.difficulty_hm_16;
          } else
            if (this.raid.groupSize == "8" && this.raid.difficulty == "nim" && this.raid.raid.difficulty_nim_8) {
              return this.raid.raid.difficulty_nim_8;
            } else
              if (this.raid.groupSize == "16" && this.raid.difficulty == "nim" && this.raid.raid.difficulty_nim_16) {
                return this.raid.raid.difficulty_nim_16;
              } else
                console.log('Unable to determine complexity for raid ' + this.raid);
    return -1;
  }

  calculateTruemmer() {
    return (((this.getComplexity() + this.trolling) / (this.skill + this.experience)) * (11 - this.motivation)).toFixed(1);
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
