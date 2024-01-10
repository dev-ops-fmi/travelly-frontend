import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accommodation } from '../model/accommodation.model';

export const API_PREFIX: string = 'api/v1';

@Injectable({
  providedIn: 'root',
})
export class AccommodationService {
  private apiUrl = `${API_PREFIX}/accommodations`;

  constructor(private http: HttpClient) {}

  deleteAccommodationById(accommodationId: number): Observable<any> {
    const url = `${this.apiUrl}/${accommodationId}`;
    return this.http.delete<void>(url);
  }

  getAccommodationById(accommodationId: number): Observable<Accommodation> {
    const url = `${this.apiUrl}/${accommodationId}`;
    return this.http.get<Accommodation>(url);
  }

  updateAccommodation(accommodation: Accommodation): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${accommodation.id}`, accommodation);
  }
}
