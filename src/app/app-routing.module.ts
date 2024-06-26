import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingSpotTableComponent } from './parking-spot-table/parking-spot-table.component';

const routes: Routes = [
  { path: '', component: ParkingSpotTableComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
