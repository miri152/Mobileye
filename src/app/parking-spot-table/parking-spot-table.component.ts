import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ParkingSpot } from 'src/models/parking-spot.model';
import { ParkingSpotService } from 'src/services/parking-spot.service';
import { SelectPakingSpotDialogComponent } from './select-paking-spot-dialog/select-paking-spot-dialog.component';

@Component({
  selector: 'app-parking-spot-table',
  templateUrl: './parking-spot-table.component.html',
  styleUrls: ['./parking-spot-table.component.css']
})
export class ParkingSpotTableComponent implements OnInit {

  spots:ParkingSpot[] = [];
  displayedColumns: string[] = ['number', 'spotType', 'allocated', 'licensePlate', 'vehicleType', 'allocatedTime', 'actions'];
  constructor(private parkingSpotService :ParkingSpotService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    setInterval(() => {
      this.parkingSpotService.getSpots().subscribe((data: ParkingSpot[]) => this.spots = data)
    }, 100000);
  }

  releaseSpot(spot: ParkingSpot) {
    this.parkingSpotService.releaseSpot(spot.pk).subscribe(() => {
      this.spots = this.spots.filter(s => s.pk !== spot.pk);
    });
  }

  selectSpot(spot: ParkingSpot) {
      // const dialogRef = this.dialog.open(SelectPakingSpotDialogComponent, {
      //   width: '250px',
      // });
  
      // dialogRef.afterClosed().subscribe(result => {
      // });
  }

}
