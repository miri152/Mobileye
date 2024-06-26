import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParkingSpot } from 'src/models/parking-spot.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpotService {

  private apiUrl = 'https://20qthdi36m.execute-api.eu-west-3.amazonaws.com/dev/spots/';
  headers = {
    'x-api-key': 'N8D9jpQxaj7xtmMIfIvtIakIsDxtA9XH9M7A6VSP'
  };
  constructor(private http: HttpClient) { }

  getSpots(): Observable<ParkingSpot[]> {
    return this.get(`${this.apiUrl}get_spots`);
  }

  releaseSpot(pk: string): Observable<any> {
    return this.post(`${this.apiUrl}release_spot`, {spot_num: pk.split('_')[1]});
  }

  get(api: string): Observable<any> {
    return this.http.get<ParkingSpot[]>(`${api}`, { headers: this.headers });
  }

  post(api: string, params): Observable<void> {
    return this.http.post<void>(`${api}`, params, { headers: this.headers });
  }
}
