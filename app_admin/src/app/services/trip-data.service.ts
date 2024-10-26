import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  url = 'http://localhost:3000/api/trips';

  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url,formData);
  }

  constructor(private http: HttpClient) { }

  getTrips():Observable<Trip[]> {
  
    return this.http.get<Trip[]>(this.url);
  }

  getTrip(tripCode:string): Observable<Trip[]>{
    return this.http.get<Trip[]>(this.url + '/' + tripCode);

  }

  updateTrip(formData: Trip): Observable<Trip>{

    return this.http.put<Trip>(this.url + '/' + formData.code, formData);

  }
}
