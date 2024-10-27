import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Trip } from '../models/trip';
import { User } from '../models/user';
import { BROWSER_STORAGE } from '../storage';
import { AuthResponse } from '../models/authresponse';

@Injectable({
  providedIn: 'root',
})
export class TripDataService {
  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  apiBaseUrl = 'http://localhost:3000/api/trips';

  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiBaseUrl, formData);
  }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiBaseUrl);
  }

  getTrip(tripCode: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiBaseUrl + '/' + tripCode);
  }

  updateTrip(formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(this.apiBaseUrl + '/' + formData.code, formData);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private async makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    console.log(`Inside TripDataService#makeAuthApiCall('${urlPath}')`);
    return await lastValueFrom(
      this.http
        .post<AuthResponse>(`${this.apiBaseUrl}/${urlPath}`, user)
    ).catch(this.handleError);
  }
  
  handleError(err:any): Promise<AuthResponse> {
    console.error('Something has gone wrong', err);
    return Promise.reject(err.message || err);
  }
}
