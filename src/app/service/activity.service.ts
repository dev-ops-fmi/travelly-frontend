import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../model/activity.model';
import { API_PREFIX } from './accommodation.service';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private apiUrl = `${API_PREFIX}/activities`;

  constructor(private http: HttpClient) {}

  deleteActivityById(activityId: number): Observable<any> {
    const url = `${this.apiUrl}/${activityId}`;
    return this.http.delete<void>(url);
  }

  getActivityById(activityId: number): Observable<Activity> {
    const url = `${this.apiUrl}/${activityId}`;
    return this.http.get<Activity>(url);
  }

  updateActivity(activity: Activity): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${activity.id}`, activity);
  }
}
