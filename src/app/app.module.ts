import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule as MatSliderModule } from '@angular/material/slider';
import { MatButtonModule as MatButtonModule } from '@angular/material/button';
import { MatSelectModule as MatSelectModule } from '@angular/material/select';
import { MatDialogModule as MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { TruemmerdialogComponent } from './truemmerdialog/truemmerdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TruemmerdialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
