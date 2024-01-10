import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../model/trip.model';
import { TripList } from '../model/trip-list.model';
import { HttpClient } from '@angular/common/http';
import { API_PREFIX } from './accommodation.service';

@Injectable({
  providedIn: 'root',
})
export class TripListService {
  // private trips: TripListModel[] = [
  //   { id: 1, name: 'aaa', destination: 'Paris' },
  //   { id: 2, name: 'bbb', destination: 'New York'}
  // ]
  //
  // public getTrips(): TripListModel[] {
  //   return this.trips;
  // }

  constructor(private httpClient: HttpClient) {
    // this.apiUrl = apiUrl;
  }

  public getTrips(): Observable<TripList[]> {
    return this.httpClient.get<TripList[]>(`${API_PREFIX}/trips`);
  }

  public getTripById(id: number): Observable<Trip> {
    return this.httpClient.get<Trip>(`${API_PREFIX}/trips/` + id);
  }

  public addTrip(newTrip: Trip): Observable<Trip> {
    // Assuming your API endpoint for adding trips is '/trips'
    const url = `${API_PREFIX}/trips`;

    // Make the POST request and return the observable
    return this.httpClient.post<Trip>(url, newTrip);
  }

  deleteTrip(tripId: number): Observable<void> {
    const url = `${API_PREFIX}/trips/${tripId}`;
    return this.httpClient.delete<void>(url);
  }
}
