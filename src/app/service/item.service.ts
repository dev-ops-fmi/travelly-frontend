import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/item.model';
import { API_PREFIX } from './accommodation.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = `${API_PREFIX}/items`;

  constructor(private http: HttpClient) {}

  deleteItemById(itemId: number): Observable<any> {
    const url = `${this.apiUrl}/${itemId}`;
    return this.http.delete<void>(url);
  }

  getItemById(itemId: number): Observable<Item> {
    const url = `${this.apiUrl}/${itemId}`;
    return this.http.get<Item>(url);
  }

  updateItem(item: Item): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${item.id}`, item);
  }
}
