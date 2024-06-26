import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingSpotTableComponent } from './parking-spot-table/parking-spot-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { SelectPakingSpotDialogComponent } from './parking-spot-table/select-paking-spot-dialog/select-paking-spot-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ParkingSpotTableComponent,
    SelectPakingSpotDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
