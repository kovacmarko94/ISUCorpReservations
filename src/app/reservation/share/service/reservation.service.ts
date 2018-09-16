import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  url = environment.baseUrl + '/reservations';

  constructor(private http: HttpClient) { }

  getAll(page: number) {
    page = page ? page : 0;
    return this.http.get<any>(`${this.url}/?page=${page}&size=10`);
  }

  save(reservation: Reservation) {
    return this.http.post(this.url, reservation);
  }

  update(id: number, reservation: Reservation) {
    return this.http.put(this.url + '/' + id, reservation);
  }

  findById(id: number) {
    return this.http.get<Reservation>(this.url + '/' + id);
  }
}
